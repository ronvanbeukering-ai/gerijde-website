/* ---------- Data ---------- */
const PRODUCTS = [
  {
    id: 'basispot',
    name: 'Basispot',
    price: 20.25,
    icon: '🎨',
    img: 'images/producten/product-basispot.jpg',
    img2: 'images/producten/product-basispot-2.jpg',
    color: 'linear-gradient(135deg,#FF8A5B,#FF5A5F)',
    accent: '#FF5A5F',
    desc: '6 kleuren gekleurd zand (50 gram), zandschilderstape, sjabloneerband en -gaas, glitterfiguurtjes, een stukje kant en een gebruiksaanwijzing.'
  },
  {
    id: 'basispot-klein-pastel',
    name: 'Kleine basispot — Pastel',
    price: 14.95,
    icon: '🎨',
    img: 'images/producten/product-basispot-klein.jpg',
    img2: 'images/producten/product-basispot-klein-2.jpg',
    color: 'linear-gradient(135deg,#FF8A5B,#FF5A5F)',
    accent: '#FF5A5F',
    desc: 'Dezelfde inhoud als de basispot, in een kleiner potje, met zachte pastelkleuren zand. Uit beperkte voorraad — zolang de voorraad strekt.'
  },
  {
    id: 'basispot-klein-fel',
    name: 'Kleine basispot — Fel',
    price: 14.95,
    icon: '🎨',
    img: 'images/producten/product-basispot-klein.jpg',
    img2: 'images/producten/product-basispot-klein-2.jpg',
    color: 'linear-gradient(135deg,#FF8A5B,#FF5A5F)',
    accent: '#FF5A5F',
    desc: 'Dezelfde inhoud als de basispot, in een kleiner potje, met felle kleuren zand. Uit beperkte voorraad — zolang de voorraad strekt.'
  },
  {
    id: 'basispot-klein-aarde',
    name: 'Kleine basispot — Aarde',
    price: 14.95,
    icon: '🎨',
    img: 'images/producten/product-basispot-klein.jpg',
    img2: 'images/producten/product-basispot-klein-2.jpg',
    color: 'linear-gradient(135deg,#FF8A5B,#FF5A5F)',
    accent: '#FF5A5F',
    desc: 'Dezelfde inhoud als de basispot, in een kleiner potje, met warme aardetinten zand. Uit beperkte voorraad — zolang de voorraad strekt.'
  },
  {
    id: 'groot-pakket',
    name: 'Groot zandschilderpakket',
    price: 32.50,
    icon: '📦',
    img: 'images/producten/product-groot-pakket.jpg',
    img2: 'images/producten/product-groot-pakket-2.jpg',
    color: 'linear-gradient(135deg,#FFD60A,#FFB400)',
    accent: '#FFB400',
    desc: '16 onderdelen voor heel veel zandschilderplezier: 10 potjes gekleurd zand, 2 potjes glitter, tape, sjabloneerband en -gaas en een stukje kant.'
  },
  {
    id: 'pakket-zand-pastel',
    name: 'Pakketje gekleurd zand — Pastel',
    price: 20.50,
    icon: '🏺',
    img: 'images/producten/product-pakket-zand-pastel.jpg',
    color: 'linear-gradient(135deg,#06D6A0,#00B4D8)',
    accent: '#00B4D8',
    desc: '8 zachte pastelkleuren zand van eigen fabrikaat. Losse potjes op aanvraag mogelijk, neem dan contact op.'
  },
  {
    id: 'pakket-zand-fel',
    name: 'Pakketje gekleurd zand — Fel',
    price: 20.50,
    icon: '🏺',
    img: 'images/producten/product-pakket-zand-fel.jpg',
    color: 'linear-gradient(135deg,#06D6A0,#00B4D8)',
    accent: '#00B4D8',
    desc: '8 felle, uitgesproken kleuren zand van eigen fabrikaat. Losse potjes op aanvraag mogelijk, neem dan contact op.'
  },
  {
    id: 'pakket-zand-aarde',
    name: 'Pakketje gekleurd zand — Aarde',
    price: 20.50,
    icon: '🏺',
    img: 'images/producten/product-pakket-zand-aarde.jpg',
    color: 'linear-gradient(135deg,#06D6A0,#00B4D8)',
    accent: '#00B4D8',
    desc: '8 warme aardetinten zand van eigen fabrikaat. Losse potjes op aanvraag mogelijk, neem dan contact op.'
  },
  {
    id: 'folie',
    name: 'Zandschilderfolie',
    price: 7.95,
    icon: '📄',
    img: 'images/producten/product-folie.jpg',
    color: 'linear-gradient(135deg,#7B2CBF,#3A86FF)',
    accent: '#7B2CBF',
    desc: '10 stukjes zandschilderfolie plus enkele kaarten om direct mee te beginnen.'
  },
  {
    id: 'lege-potjes',
    name: 'Lege potjes',
    price: 9.25,
    icon: '🫙',
    img: 'images/producten/product-lege-potjes.jpg',
    color: 'linear-gradient(135deg,#C08552,#8B5E3C)',
    accent: '#8B5E3C',
    desc: '10 lege potjes om zuinig met je zand om te gaan — vul alleen wat je nodig hebt.'
  }
];

const ETSY_SHOP = 'https://www.etsy.com/shop/GridjeMacro';

const INSECTS = [
  { num: '01', name: 'Citroenvlinder', latin: 'Gonepteryx rhamni', text: 'Rustend op een roze anjer, elke schub scherp vastgelegd.', img: 'images/insecten/insect-03.jpg', url: 'https://www.etsy.com/listing/4557224307/brimstone-butterfly-macro-photography' },
  { num: '02', name: 'Bruinrode heidelibel', latin: 'Sympetrum striolatum', text: 'Doorschijnende vleugels op een takje, in extreem detail.', img: 'images/insecten/insect-02.jpg', url: 'https://www.etsy.com/listing/4557030929/darter-dragonfly-macro-photography-print' },
  { num: '03', name: 'Distelvlinder', latin: 'Vanessa cardui', text: 'Voedend op vlinderstruikbloesem, kleurrijk en scherp.', img: 'images/insecten/insect-01.jpg', url: 'https://www.etsy.com/listing/4556783657/nymphalidae-on-buddleja' },
  { num: '04', name: 'Geel bandspanner-mot', latin: 'Camptogramma bilineata', text: 'Golvende vleugeltekening, rustend op een blad.', img: 'images/insecten/insect-04.jpg', url: 'https://www.etsy.com/listing/4557245771/yellow-shell-moth-macro-photography' },
  { num: '05', name: 'Roofvlieg', latin: 'Dioctria linearis', text: 'Een roofzuchtige jager, haarscherp op een blad vastgelegd.', img: 'images/insecten/insect-05.jpg', url: 'https://www.etsy.com/listing/4557496358/robber-fly-macro-print-digital-download' },
  { num: '06', name: 'Gestippelde sabelsprinkhaan (nimf)', latin: 'Leptophyes punctatissima', text: 'Doorschijnend groen lijfje op een felle oranje bloem.', img: 'images/insecten/insect-06.jpg', url: 'https://www.etsy.com/listing/4557499998/speckled-bush-cricket-nymph-macro-print' },
  { num: '07', name: 'Oranje zandoogje', latin: 'Pyronia tithonus', text: 'Rustend op een blad, met een lieveheersbeestje op de achtergrond.', img: 'images/insecten/insect-07.jpg', url: 'https://www.etsy.com/listing/4557501948/gatekeeper-butterfly-macro-print-digital' },
  { num: '08', name: 'Rhododendroncicade', latin: 'Graphocephala fennahi', text: 'Felle turquoise-met-rode kleuren, moeilijk met het blote oog te zien.', img: 'images/insecten/insect-08.jpg', url: 'https://www.etsy.com/listing/4557488131/rhododendron-leafhopper-macro-print' },
  { num: '09', name: 'Sluipvlieg', latin: 'Phasia hemiptera', text: 'Geaderde vleugels, tegenlicht op een duin-strobloem.', img: 'images/insecten/insect-09.jpg', url: 'https://www.etsy.com/listing/4557508384/achinid-fly-macro-print-digital-download' },
  { num: '10', name: 'Sluipvlieg (bovenaanzicht)', latin: 'Phasia hemiptera', text: 'Symmetrische compositie op een duin-strobloem.', img: 'images/insecten/insect-10.jpg', url: 'https://www.etsy.com/listing/4557492275/tachinid-fly-on-flower-macro-print' }
];

const fmt = (n) => '€ ' + n.toFixed(2).replace('.', ',');

/* ---------- Render products (webshop.html only) ---------- */
const productGrid = document.getElementById('productGrid');
if (productGrid) {
  productGrid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card" style="--accent:${p.accent}">
      <div class="product-photo${p.img2 ? ' has-alt-photo' : ''}">
        <img src="${p.img}" data-img="${p.img}" data-img2="${p.img2 || ''}" alt="${p.name}" loading="lazy">
        ${p.img2 ? '<span class="product-photo-hint">📷 nog een foto</span>' : ''}
      </div>
      <h3>${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      <div class="product-footer">
        <span class="product-price">${fmt(p.price)}</span>
        <button class="add-btn" data-id="${p.id}">In winkelwagen</button>
      </div>
    </article>
  `).join('') + `<p class="shipping-note" style="grid-column:1/-1;">Alle producten: gratis verzending.</p>`;

  productGrid.addEventListener('click', (e) => {
    const img = e.target.closest('.has-alt-photo img');
    if (!img) return;
    const current = img.getAttribute('src');
    const alt = current === img.dataset.img ? img.dataset.img2 : img.dataset.img;
    img.setAttribute('src', alt);
  });
}

/* ---------- Render insects (insecten.html only) ---------- */
const insectGrid = document.getElementById('insectGrid');
if (insectGrid) {
  insectGrid.innerHTML = INSECTS.map(i => `
    <article class="insect-card">
      <a href="${i.url}" target="_blank" rel="noopener" class="insect-photo-link">
        <img src="${i.img}" alt="${i.name} (${i.latin}) macrofoto" loading="lazy" class="insect-photo">
      </a>
      <div class="insect-body">
        <span class="insect-num">${i.num}</span>
        <h3>${i.name}</h3>
        <p class="insect-latin">${i.latin}</p>
        <p>${i.text}</p>
        <a href="${i.url}" target="_blank" rel="noopener" class="insect-buy-link">Bekijk als print →</a>
      </div>
    </article>
  `).join('');
}

/* ---------- Cart state ---------- */
let cart = {};
try {
  cart = JSON.parse(localStorage.getItem('gridje-cart') || '{}');
} catch (e) {
  cart = {};
}

function saveCart() {
  localStorage.setItem('gridje-cart', JSON.stringify(cart));
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function removeItem(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

function cartCount() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(p => p.id === id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
}

const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

function renderCart() {
  const count = cartCount();
  cartCountEl.textContent = count;
  cartCountEl.classList.toggle('hidden', count === 0);

  const entries = Object.entries(cart).filter(([id, qty]) => qty > 0);

  if (entries.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Je winkelwagen is nog leeg.</p>`;
    checkoutBtn.classList.add('is-disabled');
  } else {
    cartItemsEl.innerHTML = entries.map(([id, qty]) => {
      const p = PRODUCTS.find(p => p.id === id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-icon">${p.icon}</div>
          <div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${fmt(p.price)} per stuk</div>
            <div class="cart-item-qty">
              <button class="qty-btn" data-action="dec" data-id="${id}">−</button>
              <span>${qty}</span>
              <button class="qty-btn" data-action="inc" data-id="${id}">+</button>
            </div>
          </div>
          <div class="cart-item-right">
            <span class="cart-item-total">${fmt(p.price * qty)}</span>
            <button class="cart-item-remove" data-action="remove" data-id="${id}">verwijderen</button>
          </div>
        </div>
      `;
    }).join('');
    checkoutBtn.classList.remove('is-disabled');
  }

  cartTotalEl.textContent = fmt(cartTotal());
}

cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, id } = btn.dataset;
  if (action === 'inc') changeQty(id, 1);
  if (action === 'dec') changeQty(id, -1);
  if (action === 'remove') removeItem(id);
});

if (productGrid) {
  productGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-btn');
    if (!btn) return;
    addToCart(btn.dataset.id);
    const originalText = btn.textContent;
    btn.textContent = 'Toegevoegd ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('added');
    }, 1200);
  });
}

/* ---------- Cart drawer open/close ---------- */
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

checkoutBtn.addEventListener('click', (e) => {
  if (cartCount() === 0) e.preventDefault();
});

/* ---------- Shared order text ---------- */
function buildOrderLines() {
  return Object.entries(cart)
    .filter(([id, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = PRODUCTS.find(p => p.id === id);
      return `- ${p.name} x${qty} — ${fmt(p.price * qty)}`;
    });
}

/* ---------- Order summary + form (bestellen.html only) ---------- */
const orderSummaryEl = document.getElementById('orderSummary');
if (orderSummaryEl) {
  const orderTotalEl = document.getElementById('orderTotal');
  const entries = Object.entries(cart).filter(([id, qty]) => qty > 0);

  if (entries.length === 0) {
    orderSummaryEl.innerHTML = `<p class="cart-empty">Je winkelwagen is leeg. <a href="webshop.html">Ga naar de webshop →</a></p>`;
  } else {
    orderSummaryEl.innerHTML = entries.map(([id, qty]) => {
      const p = PRODUCTS.find(p => p.id === id);
      if (!p) return '';
      return `
        <div class="order-line">
          <span class="order-line-icon">${p.icon}</span>
          <span class="order-line-name">${p.name} <span class="order-line-qty">×${qty}</span></span>
          <span class="order-line-total">${fmt(p.price * qty)}</span>
        </div>
      `;
    }).join('');
  }
  orderTotalEl.textContent = fmt(cartTotal());

  const orderForm = document.getElementById('orderForm');
  const formError = document.getElementById('formError');
  const submitPaymentBtn = document.getElementById('submitPayment');
  const submitPaymentLabel = document.getElementById('submitPaymentLabel');
  const paymentError = document.getElementById('paymentError');
  const submitWhatsappBtn = document.getElementById('submitWhatsapp');

  function buildCustomerLines() {
    const naam = document.getElementById('ofNaam').value.trim();
    const email = document.getElementById('ofEmail').value.trim();
    const telefoon = document.getElementById('ofTelefoon').value.trim();
    const adres = document.getElementById('ofAdres').value.trim();
    const postcode = document.getElementById('ofPostcode').value.trim();
    const plaats = document.getElementById('ofPlaats').value.trim();
    const opmerking = document.getElementById('ofOpmerking').value.trim();

    const lines = [
      `Naam: ${naam}`,
      `E-mail: ${email}`,
      `Telefoon: ${telefoon || '-'}`,
      `Adres: ${adres}, ${postcode} ${plaats}`
    ];
    if (opmerking) lines.push(`Opmerking: ${opmerking}`);
    return lines;
  }

  function validateOrder() {
    const lines = buildOrderLines();
    const valid = lines.length > 0 && orderForm.reportValidity();
    formError.hidden = valid;
    return valid;
  }

  async function submitPayment() {
    if (!validateOrder()) return;
    paymentError.hidden = true;
    submitPaymentBtn.disabled = true;
    submitPaymentLabel.textContent = 'Bezig...';

    const customer = {
      naam: document.getElementById('ofNaam').value.trim(),
      email: document.getElementById('ofEmail').value.trim(),
      telefoon: document.getElementById('ofTelefoon').value.trim(),
      adres: document.getElementById('ofAdres').value.trim(),
      postcode: document.getElementById('ofPostcode').value.trim(),
      plaats: document.getElementById('ofPlaats').value.trim(),
      opmerking: document.getElementById('ofOpmerking').value.trim(),
    };

    try {
      const res = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, customer }),
      });
      const data = await res.json();

      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error || 'Kon geen betaling starten.');
      }

      // Cart is cleared on the way to Mollie; if the customer cancels and
      // comes back, they simply start a fresh order.
      localStorage.removeItem('gridje-cart');
      window.location.href = data.checkoutUrl;
    } catch (err) {
      paymentError.textContent = err.message || 'Er ging iets mis bij het starten van de betaling. Probeer het opnieuw of neem contact op via WhatsApp.';
      paymentError.hidden = false;
      submitPaymentBtn.disabled = false;
      submitPaymentLabel.textContent = 'Betaal met iDEAL';
    }
  }

  function submitWhatsapp() {
    if (!validateOrder()) return;
    const lines = buildOrderLines();
    const message = [
      'Hallo Gridje, ik wil graag het volgende bestellen:',
      '',
      ...lines,
      '',
      `Totaal: ${fmt(cartTotal())}`,
      '(gratis verzending)',
      '',
      'Mijn gegevens:',
      ...buildCustomerLines()
    ].join('\n');

    window.open(`https://wa.me/31636105802?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  }

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitPayment();
  });
  submitWhatsappBtn.addEventListener('click', submitWhatsapp);
}

/* ---------- Mobile menu ---------- */
const mainNav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mainNav.classList.remove('open'));
});

/* ---------- Lightbox (tile-examples thumbnails) ---------- */
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxSourceWebp = document.getElementById('lightboxSourceWebp');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(btn) {
    lightboxImg.src = btn.dataset.full;
    lightboxImg.alt = btn.getAttribute('aria-label') || '';
    lightboxSourceWebp.srcset = btn.dataset.fullWebp || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.tile-thumb').forEach(btn => {
    btn.addEventListener('click', () => openLightbox(btn));
  });
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ---------- Init ---------- */
renderCart();
