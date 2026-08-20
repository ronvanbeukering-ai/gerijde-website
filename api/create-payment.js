// Serverless function (Vercel) — creates a Mollie payment for a webshop order.
// Never trust prices/totals sent by the browser: this list and the total are
// always recalculated here, server-side, from the same source of truth as
// js/script.js's PRODUCTS array. Keep both in sync when products change.
const PRODUCTS = {
  'basispot':        { name: 'Basispot',                      price: 20.25 },
  'basispot-klein-pastel': { name: 'Kleine basispot — Pastel', price: 14.95 },
  'basispot-klein-fel':    { name: 'Kleine basispot — Fel',    price: 14.95 },
  'basispot-klein-aarde':  { name: 'Kleine basispot — Aarde',  price: 14.95 },
  'groot-pakket':     { name: 'Groot zandschilderpakket',      price: 32.50 },
  'pakket-zand-pastel': { name: 'Pakketje gekleurd zand — Pastel', price: 20.50 },
  'pakket-zand-fel':    { name: 'Pakketje gekleurd zand — Fel',    price: 20.50 },
  'pakket-zand-aarde':  { name: 'Pakketje gekleurd zand — Aarde',  price: 20.50 },
  'folie':            { name: 'Zandschilderfolie',             price: 7.95  },
  'lege-potjes':       { name: 'Lege potjes',                  price: 9.25  },
};

function euro(n) {
  return n.toFixed(2);
}

// Basic format check + rejection of header-injection characters (CR/LF) —
// this value later becomes an email "to" address in api/webhook.js, so it
// must never be allowed to carry newlines into that header.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email) {
  return typeof email === 'string' && EMAIL_RE.test(email) && !/[\r\n]/.test(email);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.MOLLIE_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Betalingen zijn nog niet geconfigureerd (MOLLIE_API_KEY ontbreekt).' });
    return;
  }

  const { items, customer } = req.body || {};

  if (!items || typeof items !== 'object' || Object.keys(items).length === 0) {
    res.status(400).json({ error: 'Winkelwagen is leeg.' });
    return;
  }
  if (!customer || !customer.naam || !customer.email || !customer.adres || !customer.postcode || !customer.plaats) {
    res.status(400).json({ error: 'Vul alle verplichte klantgegevens in.' });
    return;
  }
  if (!isValidEmail(customer.email)) {
    res.status(400).json({ error: 'Vul een geldig e-mailadres in.' });
    return;
  }

  // Rebuild the order and total from the trusted server-side price list.
  let total = 0;
  const lines = [];
  for (const [id, qtyRaw] of Object.entries(items)) {
    const product = PRODUCTS[id];
    const qty = Math.max(0, Math.min(50, parseInt(qtyRaw, 10) || 0));
    if (!product || qty === 0) continue;
    total += product.price * qty;
    lines.push(`${product.name} x${qty}`);
  }

  if (lines.length === 0) {
    res.status(400).json({ error: 'Winkelwagen bevat geen geldige producten.' });
    return;
  }

  const origin = `https://${req.headers.host}`;

  const payload = {
    amount: { currency: 'EUR', value: euro(total) },
    description: `Gridje bestelling — ${lines.join(', ')}`.slice(0, 255),
    redirectUrl: `${origin}/bedankt.html`,
    webhookUrl: `${origin}/api/webhook`,
    metadata: {
      lines,
      total: euro(total),
      customer: {
        naam: String(customer.naam).slice(0, 200),
        email: String(customer.email).slice(0, 200),
        telefoon: String(customer.telefoon || '').slice(0, 50),
        adres: String(customer.adres).slice(0, 200),
        postcode: String(customer.postcode).slice(0, 20),
        plaats: String(customer.plaats).slice(0, 100),
        opmerking: String(customer.opmerking || '').slice(0, 500),
      },
    },
  };

  try {
    const mollieRes = await fetch('https://api.mollie.com/v2/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await mollieRes.json();

    if (!mollieRes.ok) {
      res.status(502).json({ error: data.detail || 'Mollie kon de betaling niet aanmaken.' });
      return;
    }

    const checkoutUrl = data._links && data._links.checkout && data._links.checkout.href;
    if (!checkoutUrl) {
      res.status(502).json({ error: 'Geen betaallink ontvangen van Mollie.' });
      return;
    }

    res.status(200).json({ checkoutUrl });
  } catch (err) {
    res.status(500).json({ error: 'Onverwachte fout bij het aanmaken van de betaling.' });
  }
};
