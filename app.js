// Basic state
const WHATSAPP_BASE_NUMBER = "918431014886"; // Always send to +91 8431014886

const products = [
  // Oversize tees (Lunch Break and Shakti on top)
  { id: "tee-oversize-4", name: "Lunch Break Tee", type: "oversize", collection: "sm", price: 799, image: "./assets/tees/front3.png", images: ["./assets/tees/front3.png", "./assets/tees/back3.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-5", name: "Shakti Tees", type: "oversize", collection: "sm", price: 799, image: "./assets/tees/white4.png", images: ["./assets/tees/white4.png", "./assets/tees/black4.png"], colors: [
    { label: "White", image: "./assets/tees/white4.png" },
    { label: "Black", image: "./assets/tees/black4.png" }
  ], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize", name: "Seedhe Maut Tee", type: "oversize", collection: "sm", price: 799, image: "./assets/tees/fn.png", images: ["./assets/tees/fn.png", "./assets/tees/bk sm.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-2", name: "सीधे मौत", type: "oversize", collection: "sm", price: 799, image: "./assets/tees/back1.png", images: ["./assets/tees/back1.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-3", name: "सीधे मौत", type: "oversize", collection: "sm", price: 799, image: "./assets/tees/back2.png", images: ["./assets/tees/back2.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-6", name: "Run it up", type: "oversize", price: 799, image: "./assets/tees/hanu.png", images: ["./assets/tees/hanu.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-7", name: "Circus Maximus Oversized Tee", type: "oversize", price: 799, image: "./assets/tees/wts.png", images: ["./assets/tees/wts.png", "./assets/tees/cts.png"], colors: [
    { label: "White", image: "./assets/tees/wts.png" },
    { label: "Cream", image: "./assets/tees/cts.png" }
  ], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-8", name: "dhanji tee", type: "oversize", price: 799, image: "./assets/tees/dan1.png", images: ["./assets/tees/dan1.png", "./assets/tees/dan2.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-9", name: "RUAB tee", type: "oversize", price: 799, image: "./assets/tees/dd1.png", images: ["./assets/tees/dd1.png", "./assets/tees/dd.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-10", name: "fight club", type: "oversize", price: 599, image: "./assets/tees/fight1.jpg", images: ["./assets/tees/fight1.jpg"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-11", name: "drive", type: "oversize", price: 599, image: "./assets/tees/drive1.jpg", images: ["./assets/tees/drive1.jpg"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-12", name: "taxi driver", type: "oversize", price: 599, image: "./assets/tees/d3.png", images: ["./assets/tees/d3.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  { id: "tee-oversize-13", name: "killer jese ham", type: "oversize", price: 799, image: "./assets/tees/wd.png", images: ["./assets/tees/wd.png"], sizeChart: "./assets/tees/oversize chart.jpg", sizes: ["S","M","L","XL"] },
  // Hoodies
  { id: "hoodie-shakti", name: "Shakti Hoodie", type: "hoodie", price: 999, originalPrice: 1499, image: "./assets/tees/hoodie1.JPEG", images: ["./assets/tees/hoodie1.JPEG", "./assets/tees/hoodie2.JPEG", "./assets/tees/hoodie3.JPEG"], sizeChart: "./assets/tees/hoodie chart.jpg", sizes: ["S","M","L","XL"], details: "Hoodie • 100% cotton • 350 GSM" },
  // Remaining 13 tees as Round Neck Tee
  { id: "tee-1", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/1.png", sizes: ["S","M","L","XL"] },
  { id: "tee-2", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/2.png", sizes: ["S","M","L","XL"] },
  { id: "tee-3", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/3.png", sizes: ["S","M","L","XL"] },
  { id: "tee-4", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/4.png", sizes: ["S","M","L","XL"] },
  { id: "tee-5", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/5.png", sizes: ["S","M","L","XL"] },
  { id: "tee-6", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/6.png", sizes: ["S","M","L","XL"] },
  { id: "tee-7", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/7.png", sizes: ["S","M","L","XL"] },
  { id: "tee-8", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/8.png", sizes: ["S","M","L","XL"] },
  { id: "tee-9", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/9.png", sizes: ["S","M","L","XL"] },
  { id: "tee-10", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/10.png", sizes: ["S","M","L","XL"] },
  { id: "tee-12", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/12.png", sizes: ["S","M","L","XL"] },
  { id: "tee-13", name: "Round Neck Tee", type: "regular", price: 499, image: "./assets/tees/13.png", sizes: ["S","M","L","XL"] },
];

function formatCurrency(inr) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "INR" }).format(inr);
}

function readCart() {
  try { return JSON.parse(localStorage.getItem("clothinn_cart") || "[]"); } catch { return []; }
}
function writeCart(items) {
  localStorage.setItem("clothinn_cart", JSON.stringify(items));
  renderCartCount();
}
function removeFromCart(productId, size = null) {
  const cart = readCart();
  const next = cart.filter(i => !(i.id === productId && i.size === size));
  writeCart(next);
}
function addToCart(productId, size = null, qty = 1) {
  const cart = readCart();
  const found = cart.find(i => i.id === productId && i.size === size);
  if (found) { found.qty += qty; } else { cart.push({ id: productId, size, qty }); }
  writeCart(cart);
  // Stay on the same page; no redirect
}

function showAddToCartFeedback(button) {
  const originalText = button.textContent;
  
  // Add click animation and success state
  button.classList.add('btn-add-clicked', 'btn-add-success');
  button.textContent = 'Added! ✓';
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove('btn-add-clicked', 'btn-add-success');
    button.disabled = false;
  }, 1500);
}
function cartSubtotal(cart) {
  return cart.reduce((sum, item) => {
    const p = products.find(p => p.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

// UI hooks
function renderCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const oldCount = parseInt(el.textContent) || 0;
  const count = readCart().reduce((n, i) => n + i.qty, 0);
  el.textContent = String(count);
  
  // Animate cart count increase
  if (count > oldCount) {
    el.classList.add('cart-count-pop');
    setTimeout(() => el.classList.remove('cart-count-pop'), 500);
  }
}

function renderProducts() {
  const gridOversize = document.getElementById("productGridOversize");
  const gridRegular = document.getElementById("productGridRegular");
  const gridHoodies = document.getElementById("productGridHoodies");
  const gridOversizeOther = document.getElementById("productGridOversizeOther");
  if (!gridOversize && !gridRegular && !gridHoodies && !gridOversizeOther) return;
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 500\"><rect width=\"100%\" height=\"100%\" fill=\"#efefef\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"#999\" font-family=\"Arial, sans-serif\" font-size=\"22\">Image not found</text></svg>`);
  const defaultDetails = "Round neck • 100% cotton • 180 GSM";
  const cardHtml = (p) => {
    const detailsText = p.details || ((p.type || 'regular') === 'oversize' ? 'Oversize • 100% cotton • 250 GSM' : defaultDetails);
    return `
    <article class="product card ${p.id==='hoodie-shakti'||p.id==='tee-oversize-5' ? 'card--compact' : ''}">
      <div class="img">${p.images && p.images.length ? `<img src="${p.images[0]}" alt="${p.name}" data-gallery="${p.images.join('|')}" data-index="0" onerror="this.onerror=null;this.src='${fallback}';">` : `<img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='${fallback}';">`}</div>
      <div class="body">
        <div class="meta"><strong>${p.name}</strong><div class="price-container">${p.originalPrice ? `<span class="price-original">${formatCurrency(p.originalPrice)}</span>` : ''}<span class="price">${formatCurrency(p.price)}</span></div></div>
        <div class="muted" style="font-size:13px;">${detailsText}</div>
        ${p.colors ? `<div class="muted" style="display:flex; gap:8px; align-items:center;">Color: ${p.colors.map(c => `<button class="btn btn-sm" data-color-swap="${c.image}">${c.label}</button>`).join('')}</div>` : ''}
        <label>
          <span class="muted">Size</span>
          <select data-sel="size" aria-label="Select size">
            ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
          </select>
        </label>
        <button class="btn btn-secondary btn-icon" data-size-chart data-chart="${p.sizeChart || ''}" aria-label="Size chart" title="Size chart">📏</button>
        <div class="actions" style="display:flex; gap:8px;">
          <button class="btn btn-secondary" data-add="${p.id}">Add to Cart</button>
          <button class="btn btn-primary" data-buy="${p.id}">Buy Now</button>
        </div>
      </div>
    </article>
  `;
  };

  if (gridOversize) {
    const list = products.filter(p => (p.type || 'regular') === 'oversize' && p.collection === 'sm');
    gridOversize.innerHTML = list.map(cardHtml).join("");
  }
  if (gridOversizeOther) {
    const list = products.filter(p => (p.type || 'regular') === 'oversize' && p.collection !== 'sm');
    gridOversizeOther.innerHTML = list.map(cardHtml).join("");
  }
  if (gridRegular) {
    const list = products.filter(p => (p.type || 'regular') === 'regular');
    gridRegular.innerHTML = list.map(cardHtml).join("");
  }
  if (gridHoodies) {
    const list = products.filter(p => p.type === 'hoodie');
    gridHoodies.innerHTML = list.map(cardHtml).join("");
  }
  const bindGrid = (grid) => {
    if (!grid) return;
    grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const card = e.target.closest(".product");
      const size = card.querySelector('[data-sel="size"]').value;
      addToCart(btn.getAttribute("data-add"), size, 1);
      showAddToCartFeedback(btn);
    });
    });
    grid.querySelectorAll("[data-buy]").forEach(btn => {
      btn.addEventListener("click", e => {
        const card = e.target.closest(".product");
        const size = card.querySelector('[data-sel="size"]').value;
        const quick = [{ id: btn.getAttribute("data-buy"), size, qty: 1 }];
        sessionStorage.setItem("clothinn_quick_buy", JSON.stringify(quick));
        sessionStorage.setItem("clothinn_mode", "quick");
        window.location.href = "./checkout.html";
      });
    });
    grid.querySelectorAll('[data-size-chart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const chart = btn.getAttribute('data-chart');
        openSizeChart(chart);
      });
    });
    // color swap buttons (e.g., Shakti Tees white/black)
    grid.querySelectorAll('[data-color-swap]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const img = e.target.closest('.product').querySelector('.img img');
        if (!img) return;
        const target = btn.getAttribute('data-color-swap');
        img.onerror = () => { img.onerror = null; img.src = fallback; };
        img.setAttribute('src', target);
        img.setAttribute('data-index', '0');
      });
    });
    grid.querySelectorAll('img[data-gallery]').forEach(img => {
      const switchImage = () => {
        const list = (img.getAttribute('data-gallery') || '').split('|').filter(Boolean);
        if (list.length < 2) return;
        const current = Number(img.getAttribute('data-index') || '0');
        const next = (current + 1) % list.length;
        img.onerror = () => { img.onerror = null; img.src = fallback; };
        img.setAttribute('data-index', String(next));
        img.setAttribute('src', list[next]);
      };
      img.addEventListener('click', switchImage);
      let startX = null;
      img.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
      img.addEventListener('touchend', (e) => {
        if (startX == null) return;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 24) { switchImage(); }
        startX = null;
      });
      // auto-rotate images every 3.5s when multiple images are available
      const list = (img.getAttribute('data-gallery') || '').split('|').filter(Boolean);
      if (list.length > 1) {
        const existing = img.getAttribute('data-rot')
        if (!existing) {
          const id = setInterval(switchImage, 3500);
          img.setAttribute('data-rot', String(id));
        }
      }
    });
  };

  bindGrid(gridOversize);
  bindGrid(gridOversizeOther);
  bindGrid(gridRegular);
  bindGrid(gridHoodies);
}

function renderCheckout() {
  const summary = document.getElementById("summaryItems");
  if (!summary) return;
  // Prefer quick buy only when explicitly set
  const mode = sessionStorage.getItem("clothinn_mode");
  const quick = JSON.parse(sessionStorage.getItem("clothinn_quick_buy") || "null");
  const cart = (mode === 'quick' && quick) ? quick : readCart();

  summary.innerHTML = cart.map(item => {
    const p = products.find(p => p.id === item.id);
    if (!p) return "";
    const img = (p.images && p.images.length ? p.images[0] : p.image) || '';
    return `<div class="summary-item-row">
      <img src="${img}" alt="${p.name}">
      <div>
        <div><strong>${p.name}</strong>${item.size ? ` — ${item.size}` : ''}</div>
        <div class="muted">Qty: ${item.qty}</div>
      </div>
      <div>${formatCurrency(p.price * item.qty)}</div>
    </div>`;
  }).join("");
  document.getElementById("summarySubtotal").textContent = formatCurrency(cartSubtotal(cart));

  const form = document.getElementById("addressForm");
  form.addEventListener("submit", ev => {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const orderLines = cart.map(item => {
      const p = products.find(p => p.id === item.id);
      return `${p ? p.name : item.id}${item.size ? " ("+item.size+")" : ""} x ${item.qty}`;
    }).join("; ");
    const address = [data.name, data.phone, data.email, data.line1, data.line2, data.directions, `${data.city}, ${data.state} ${data.zip}`]
      .filter(Boolean).join(" | ");
    const text = encodeURIComponent(`New order — Clothinn\nItems: ${orderLines}\nSubtotal: ${formatCurrency(cartSubtotal(cart))}\nShip to: ${address}`);
    const number = WHATSAPP_BASE_NUMBER;
    const url = `https://wa.me/${number}?text=${text}`;
    window.location.href = url;
  });
}

function renderCartPage() {
  const list = document.getElementById('cartItems');
  if (!list) return;
  try { sessionStorage.removeItem('clothinn_mode'); } catch {}
  const cart = readCart();
  list.innerHTML = cart.map(item => {
    const p = products.find(p => p.id === item.id);
    if (!p) return '';
    const img = (p.images && p.images.length ? p.images[0] : p.image) || '';
    const line = p ? p.price * item.qty : 0;
    return `<div class="summary-item-row">
      <img src="${img}" alt="${p.name}">
      <div>
        <div><strong>${p.name}</strong>${item.size ? ` — ${item.size}` : ''}</div>
        <div class="muted">Qty: ${item.qty}</div>
        <button class="btn btn-sm btn-danger" data-remove-id="${item.id}" data-remove-size="${item.size || ''}">Remove</button>
      </div>
      <div>${formatCurrency(line)}</div>
    </div>`;
  }).join('');
  const subtotalEl = document.getElementById('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = formatCurrency(cartSubtotal(cart));
  list.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove-id');
      const size = btn.getAttribute('data-remove-size') || null;
      removeFromCart(id, size);
      renderCartPage();
    });
  });
}

function bindThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  // Force dark mode always
  document.documentElement.classList.add("dark");
  localStorage.setItem("clothinn_theme", "dark");
  // Hide the toggle
  btn.style.display = "none";
  updateHeaderLogos();
}

// boot
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
  bindThemeToggle();
  renderProducts();
  renderCartCount();
  renderCheckout();
  renderCartPage();
  initSizeChart();
});

function updateHeaderLogos() {
  const isDark = document.documentElement.classList.contains("dark");
  document.querySelectorAll('.site-logo').forEach(img => {
    const light = img.getAttribute('data-logo-light');
    const dark = img.getAttribute('data-logo-dark');
    const desired = isDark ? (dark || light) : (light || dark);
    if (desired && img.getAttribute('src') !== desired) {
      const previous = img.getAttribute('src');
      img.onerror = () => { img.onerror = null; img.src = previous; };
      img.src = desired;
    }
  });
}

function initSizeChart() {
  const modal = document.getElementById('sizeChart');
  if (!modal) return;
  const setOpen = (open) => { modal.setAttribute('aria-hidden', open ? 'false' : 'true'); };
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  window.openSizeChart = (src) => {
    const img = modal.querySelector('.modal-image');
    if (img) {
      const desired = src && src.trim() ? src : './assets/tees/IMG_1237.jpg';
      const previous = img.getAttribute('src');
      img.onerror = () => { img.onerror = null; img.src = previous; };
      img.src = desired;
    }
    setOpen(true);
  };
  // click image toggles compact/full
  const dialog = modal.querySelector('.modal-dialog');
  const img = modal.querySelector('.modal-image');
  if (img && dialog) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const large = dialog.classList.toggle('large');
      img.style.cursor = large ? 'zoom-out' : 'zoom-in';
    });
  }
}


