// Serverless function (Vercel) — Mollie calls this URL whenever a payment's
// status changes. We never trust the webhook body itself (Mollie only sends
// an id); we always re-fetch the payment from Mollie's API to confirm the
// real status before treating an order as paid.
const { sendMail, FROM_ADDRESS } = require('./_mail');

function euro(value) {
  return `€ ${Number(value).toFixed(2).replace('.', ',')}`;
}

async function notifyOrder(payment) {
  const meta = payment.metadata || {};
  const lines = Array.isArray(meta.lines) ? meta.lines : [];
  const customer = meta.customer || {};
  const total = meta.total ? euro(meta.total) : '';

  const orderBlock = [
    ...lines.map((l) => `- ${l}`),
    '',
    `Totaal: ${total}`,
  ].join('\n');

  // Notification to the shop owner — this is the primary "new order" alert.
  await sendMail({
    to: FROM_ADDRESS,
    subject: `Nieuwe betaalde bestelling — ${total}`,
    text: [
      'Er is een nieuwe, betaalde bestelling binnengekomen:',
      '',
      orderBlock,
      '',
      'Klantgegevens:',
      `Naam: ${customer.naam || '-'}`,
      `E-mail: ${customer.email || '-'}`,
      `Telefoon: ${customer.telefoon || '-'}`,
      `Adres: ${customer.adres || '-'}, ${customer.postcode || ''} ${customer.plaats || ''}`,
      customer.opmerking ? `Opmerking: ${customer.opmerking}` : '',
      '',
      `Mollie payment ID: ${payment.id}`,
    ].filter(Boolean).join('\n'),
  });

  // Confirmation to the customer.
  if (customer.email) {
    await sendMail({
      to: customer.email,
      subject: 'Bevestiging van je bestelling — Gridje Design',
      text: [
        `Hallo ${customer.naam || ''},`.trim(),
        '',
        'Bedankt voor je bestelling! We hebben je betaling ontvangen en gaan voor je aan de slag.',
        '',
        orderBlock,
        '',
        'Bezorgadres:',
        `${customer.adres || ''}, ${customer.postcode || ''} ${customer.plaats || ''}`,
        '',
        'Vragen? Mail gerust terug naar dit adres, of app ons: https://wa.me/31636105802',
        '',
        'Groet,',
        'Gridje Design',
      ].join('\n'),
    });
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const apiKey = process.env.MOLLIE_API_KEY;
  const paymentId = (req.body && req.body.id) || (req.query && req.query.id);

  if (!apiKey || !paymentId) {
    // Always acknowledge with 200 so Mollie doesn't keep retrying on
    // malformed pings, but there's nothing useful to do without an id.
    res.status(200).end();
    return;
  }

  try {
    const mollieRes = await fetch(`https://api.mollie.com/v2/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const payment = await mollieRes.json();

    if (payment.status === 'paid') {
      // Order is confirmed paid. Full order details (products, customer
      // name/address/email/phone) are in payment.metadata, and every paid
      // order stays visible in the Mollie Dashboard under Payments as the
      // permanent record either way.
      await notifyOrder(payment);
    }

    res.status(200).end();
  } catch (err) {
    // Still acknowledge — Mollie will retry failed webhooks on its own,
    // and a 5xx here would just trigger unnecessary retries for something
    // we can equally well re-check by looking at the Mollie Dashboard.
    res.status(200).end();
  }
};
