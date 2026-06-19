/* ============================================================
   HoneyWoodLand — shared chrome (header, footer, drawer, search,
   toast) injected into every page + shared interaction logic.
   Pages only need:  <header id="site-header"></header>
                     <footer id="site-footer"></footer>
                     <script src="assets/site.js"></script>
   All links are RELATIVE so they work on GitHub Pages.
   ============================================================ */
(function () {
  'use strict';

  var ANNOUNCE =
    '<div class="announce">COMPLIMENTARY SHIPPING OVER $150 · SHIPS TO US · CA · EU</div>';

  var NAV =
    '<div class="wrap nav">' +
      '<div class="burger" onclick="openDrawer()" aria-label="Open menu">' +
        '<svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
      '</div>' +
      '<nav class="nav-links">' +
        '<a href="index.html">Home</a>' +
        '<a href="category.html">Shop</a>' +
        '<a href="index.html#wedding">Weddings</a>' +
        '<a href="index.html#events">Events</a>' +
        '<a href="index.html#business">For Business</a>' +
        '<a href="index.html#inspiration">Inspiration</a>' +
      '</nav>' +
      '<a href="index.html" class="logo">' +
        '<span class="name">HoneyWoodLand</span>' +
        '<span class="tag">Atelier of Details</span>' +
      '</a>' +
      '<div class="nav-icons">' +
        '<a role="button" tabindex="0" aria-label="Search" onclick="openSearch()"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg></a>' +
        '<a class="wish" role="button" tabindex="0" aria-label="Wishlist" aria-pressed="false" onclick="toggleWish(this)"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.2 1.3 4 2.5C10.8 6.3 12 5 14 5c3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z"/></svg></a>' +
        '<a href="cart.html" class="cart-ico" aria-label="Cart"><svg viewBox="0 0 24 24"><path d="M6 7h12l-1.5 12.5a1 1 0 0 1-1 .9H8.5a1 1 0 0 1-1-.9L6 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg><span class="cart-badge">2</span></a>' +
      '</div>' +
    '</div>';

  var FOOTER =
    '<div class="news">' +
      '<p class="overline">Join the Atelier List</p>' +
      '<h2>Become a member &amp; enjoy 10% off your first order</h2>' +
      '<form onsubmit="return false">' +
        '<input type="email" placeholder="Email address" aria-label="Email address" />' +
        '<button class="btn btn-primary">Subscribe</button>' +
      '</form>' +
    '</div>' +
    '<div class="wrap foot-cols">' +
      '<div class="brand">' +
        '<div class="name">HoneyWoodLand</div>' +
        '<p>Personalized wooden &amp; acrylic décor for weddings, events and beautiful moments — handcrafted in our own atelier.</p>' +
      '</div>' +
      '<div class="foot-col"><h4>Shop</h4><a href="category.html">Place Names</a><a href="category.html">Table Numbers</a><a href="category.html">Seating Charts</a><a href="category.html">Welcome Signs</a><a href="category.html">Best Sellers</a></div>' +
      '<div class="foot-col"><h4>For Business</h4><a href="index.html#business">Restaurants</a><a href="index.html#business">Hotels</a><a href="index.html#business">Corporate Gifts</a><a href="index.html#business">Trade Program</a><a href="index.html#business">Request a Quote</a></div>' +
      '<div class="foot-col"><h4>Help</h4><a href="index.html#faq">Shipping</a><a href="index.html#faq">Returns</a><a href="index.html#faq">FAQ</a><a href="index.html#faq">Track Order</a><a href="index.html#faq">Contact</a></div>' +
      '<div class="foot-col"><h4>Atelier</h4><a href="index.html#wedding">Our Story</a><a href="index.html#dyo">How It\'s Made</a><a href="index.html#inspiration">Inspiration</a><a href="index.html#dyo">Design Your Own</a><a href="index.html#reviews">Reviews</a></div>' +
    '</div>' +
    '<div class="wrap foot-bottom">' +
      '<span>MADE IN OUR OWN ATELIER · SHIPS TO US · CA · EU · FREE DESIGN PROOF</span>' +
      '<span>VISA · MASTERCARD · AMEX · PAYPAL · KLARNA</span>' +
    '</div>';

  var DRAWER =
    '<div class="drawer" id="drawer">' +
      '<div class="scrim" onclick="closeDrawer()"></div>' +
      '<div class="panel">' +
        '<div class="x">' +
          '<span class="name">HoneyWoodLand</span>' +
          '<svg viewBox="0 0 24 24" onclick="closeDrawer()"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>' +
        '</div>' +
        '<a href="index.html" onclick="closeDrawer()">Home</a>' +
        '<a href="category.html" onclick="closeDrawer()">Shop</a>' +
        '<a href="index.html#wedding" onclick="closeDrawer()">Weddings</a>' +
        '<a href="index.html#events" onclick="closeDrawer()">Events</a>' +
        '<a href="index.html#business" onclick="closeDrawer()">For Business</a>' +
        '<a href="index.html#inspiration" onclick="closeDrawer()">Inspiration</a>' +
        '<a href="cart.html" onclick="closeDrawer()">Cart</a>' +
      '</div>' +
    '</div>';

  var SEARCH =
    '<div class="searchbar" id="searchBar">' +
      '<form class="wrap" onsubmit="return doSearch(event)">' +
        '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>' +
        '<input id="searchInput" type="search" placeholder="Search place names, table numbers, signs…" aria-label="Search products" />' +
        '<button type="button" class="close" onclick="closeSearch()" aria-label="Close search">✕</button>' +
      '</form>' +
    '</div>';

  var TOAST = '<div class="toast" id="toast" role="status" aria-live="polite"></div>';

  /* ---------- cart count (persisted across pages) ---------- */
  function cartGet() {
    var v = parseInt(localStorage.getItem('hwl_cart'), 10);
    return isNaN(v) ? 2 : v;
  }
  function cartSync() {
    var b = document.querySelector('.cart-badge');
    if (b) b.textContent = cartGet();
  }

  /* ---------- global handlers (referenced by injected markup + pages) ---------- */
  window.toast = function (msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window._toastT);
    window._toastT = setTimeout(function () { t.classList.remove('show'); }, 2000);
  };

  window.addToCart = function (n) {
    n = n || 1;
    localStorage.setItem('hwl_cart', cartGet() + n);
    var b = document.querySelector('.cart-badge');
    if (b) {
      b.textContent = cartGet();
      b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    }
    window.toast('Added to cart');
  };

  window.openDrawer = function () {
    var d = document.getElementById('drawer');
    if (d) { d.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };
  window.closeDrawer = function () {
    var d = document.getElementById('drawer');
    if (d) { d.classList.remove('open'); document.body.style.overflow = ''; }
  };

  window.openSearch = function () {
    var s = document.getElementById('searchBar');
    if (!s) return;
    s.classList.add('open');
    var i = document.getElementById('searchInput');
    setTimeout(function () { if (i) i.focus(); }, 120);
  };
  window.closeSearch = function () {
    var s = document.getElementById('searchBar');
    if (s) s.classList.remove('open');
  };
  window.doSearch = function (e) {
    e.preventDefault();
    var i = document.getElementById('searchInput');
    var v = (i ? i.value : '').trim();
    window.toast(v ? 'Searching “' + v + '”…' : 'Type to search our atelier');
    if (v) window.closeSearch();
    return false;
  };

  window.toggleWish = function (el) {
    var on = el.classList.toggle('on');
    el.setAttribute('aria-pressed', on ? 'true' : 'false');
    window.toast(on ? 'Added to wishlist' : 'Removed from wishlist');
  };

  /* ---------- inject chrome + wire ---------- */
  function init() {
    var header = document.getElementById('site-header');
    if (header) {
      header.insertAdjacentHTML('beforebegin', ANNOUNCE);
      header.innerHTML = NAV;
    }
    var footer = document.getElementById('site-footer');
    if (footer) footer.innerHTML = FOOTER;

    if (!document.getElementById('drawer')) document.body.insertAdjacentHTML('beforeend', DRAWER);
    if (!document.getElementById('searchBar')) document.body.insertAdjacentHTML('beforeend', SEARCH);
    if (!document.getElementById('toast')) document.body.insertAdjacentHTML('beforeend', TOAST);

    cartSync();

    if (header) {
      var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 24); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { window.closeSearch(); window.closeDrawer(); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
