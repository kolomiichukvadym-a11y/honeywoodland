/* ============================================================
   HoneyWoodLand — central product catalog.
   Shared across index.html, category.html and product.html.
   Prices in USD. img is added later; pages use a placeholder.
   ============================================================ */
window.HWL_PRODUCTS = [
  // PLACE CARDS
  { id:"wood-place-card", cat:"place-cards", name:"Wooden Laser-Cut Place Card", material:"Wood", price:2.30, compareAt:3.10, badge:"Bestseller" },
  { id:"gold-mirror-place-card", cat:"place-cards", name:"Gold Mirror Acrylic Place Card", material:"Acrylic", price:1.70, compareAt:2.30, badge:"" },
  { id:"copper-mirror-place-card", cat:"place-cards", name:"Copper Mirror Acrylic Place Card", material:"Acrylic", price:1.70, compareAt:2.30, badge:"" },
  { id:"initials-place-card", cat:"place-cards", name:"Custom Initial Place Card", material:"Wood", price:2.30, compareAt:3.10, badge:"" },
  { id:"napkin-ring-name", cat:"place-cards", name:"Personalized Wooden Napkin Ring + Name", material:"Wood", price:3.40, compareAt:4.50, badge:"" },
  { id:"heart-name-tag", cat:"place-cards", name:"Wooden Heart Name Tag", material:"Wood", price:0.90, compareAt:1.20, badge:"" },
  // TABLE NUMBERS
  { id:"acrylic-gold-mirror-numbers", cat:"table-numbers", name:"Acrylic Clear & Gold Mirror Table Numbers", material:"Acrylic", price:8.90, compareAt:11.90, badge:"Bestseller" },
  { id:"gold-mirror-numbers", cat:"table-numbers", name:"Gold Mirror Acrylic Table Numbers", material:"Acrylic", price:4.60, compareAt:6.10, badge:"" },
  { id:"silver-mirror-numbers", cat:"table-numbers", name:"Silver Mirror Acrylic Table Numbers", material:"Acrylic", price:4.60, compareAt:6.10, badge:"" },
  { id:"rose-gold-numbers", cat:"table-numbers", name:"Rose Gold Mirror Table Numbers w/ Stand", material:"Acrylic", price:4.60, compareAt:6.10, badge:"" },
  { id:"clear-acrylic-numbers", cat:"table-numbers", name:"Clear Acrylic Table Numbers w/ Stand", material:"Acrylic", price:4.60, compareAt:6.10, badge:"" },
  { id:"black-acrylic-numbers", cat:"table-numbers", name:"Black Acrylic Table Numbers w/ Base", material:"Acrylic", price:4.60, compareAt:6.10, badge:"" },
  { id:"wooden-table-numbers", cat:"table-numbers", name:"Rustic Wooden Table Numbers w/ Base", material:"Wood", price:8.90, compareAt:11.90, badge:"" },
  { id:"hexagon-numbers", cat:"table-numbers", name:"Hexagon Wooden Table Numbers w/ Base", material:"Wood", price:5.80, compareAt:7.70, badge:"" },
  { id:"mountain-table-numbers", cat:"table-numbers", name:"Mountain Rustic Table Numbers", material:"Wood", price:10.70, compareAt:14.30, badge:"" },
  { id:"red-matte-numbers", cat:"table-numbers", name:"Red Matte Wooden Table Numbers", material:"Wood", price:10.70, compareAt:14.30, badge:"" },
  { id:"table-names-city", cat:"table-numbers", name:"Custom City / Word Table Names", material:"Wood", price:11.80, compareAt:15.70, badge:"" },
  // CAKE TOPPERS
  { id:"rustic-cake-topper", cat:"cake-toppers", name:"Rustic Mr & Mrs Wooden Cake Topper", material:"Wood", price:33.50, compareAt:44.70, badge:"Bestseller" },
  { id:"mirror-cake-topper", cat:"cake-toppers", name:"Personalized Mirror Acrylic Cake Topper", material:"Acrylic", price:31.50, compareAt:42.10, badge:"" },
  { id:"initial-cake-topper", cat:"cake-toppers", name:"Elegant Initial Cake Topper", material:"Wood", price:33.50, compareAt:44.70, badge:"" },
  { id:"birthday-cake-topper", cat:"cake-toppers", name:"Custom Birthday Cake Topper", material:"Wood", price:33.50, compareAt:44.70, badge:"" },
  // SIGNS
  { id:"mr-mrs-chair-signs", cat:"signs", name:"Mr & Mrs Wedding Chair Signs", material:"Wood", price:40.00, compareAt:53.80, badge:"Bestseller" },
  { id:"bride-to-be-chair", cat:"signs", name:"Bride To Be Chair Sign", material:"Wood", price:40.00, compareAt:53.80, badge:"" },
  { id:"front-door-sign", cat:"signs", name:"Personalized Wooden Front Door Sign", material:"Wood", price:22.50, compareAt:30.00, badge:"" },
  { id:"wc-door-sign", cat:"signs", name:"WC / Bathroom Laser-Cut Door Sign", material:"Wood", price:27.50, compareAt:36.80, badge:"" },
  { id:"menu-holder", cat:"signs", name:"Wooden Table Menu Holder Stand", material:"Wood", price:32.00, compareAt:43.00, badge:"" },
  { id:"cocktail-menu-sign", cat:"signs", name:"Cocktail Drinks Menu Arch Sign", material:"Wood", price:32.00, compareAt:43.00, badge:"" },
  { id:"freestanding-name-sign", cat:"signs", name:"Large Freestanding Name Sign", material:"Wood", price:31.50, compareAt:42.00, badge:"" },
  // DRINK ACCESSORIES
  { id:"wine-glass-charms", cat:"drink-accessories", name:"Personalized Wine Glass Charms", material:"Acrylic", price:1.95, compareAt:2.60, badge:"" },
  { id:"butterfly-charm", cat:"drink-accessories", name:"Butterfly Wine Glass Charm", material:"Acrylic", price:1.95, compareAt:2.60, badge:"" },
  { id:"drink-stirrers", cat:"drink-accessories", name:"Personalized Drink Stirrers", material:"Acrylic", price:1.95, compareAt:2.60, badge:"" },
  { id:"couple-coasters", cat:"drink-accessories", name:"Personalized Couple Coaster Set", material:"Wood", price:26.00, compareAt:34.60, badge:"" },
  // CHRISTMAS
  { id:"christmas-bauble", cat:"christmas", name:"Personalized Christmas Bauble", material:"Wood", price:8.90, compareAt:11.90, badge:"" },
  { id:"christmas-ornament-logo", cat:"christmas", name:"Custom Logo Christmas Ornament", material:"Wood", price:10.70, compareAt:14.30, badge:"" },
  { id:"christmas-3d-bauble", cat:"christmas", name:"3D Christmas Tree Bauble w/ Name", material:"Wood", price:15.50, compareAt:20.70, badge:"" },
  { id:"stocking-tags", cat:"christmas", name:"Christmas Wood Stocking Tags", material:"Wood", price:7.10, compareAt:9.50, badge:"" },
  { id:"dog-ornament", cat:"christmas", name:"Personalized Dog Christmas Ornament", material:"Wood", price:9.40, compareAt:12.60, badge:"" },
  // SEASONAL
  { id:"thanksgiving-place-cards", cat:"seasonal", name:"Thanksgiving Leaf Place Cards", material:"Wood", price:4.60, compareAt:6.10, badge:"" },
  { id:"turkey-place-cards", cat:"seasonal", name:"Turkey Thanksgiving Place Cards", material:"Wood", price:6.90, compareAt:9.20, badge:"" },
  { id:"easter-bunny-tag", cat:"seasonal", name:"Easter Basket Bunny Name Tag", material:"Acrylic", price:6.20, compareAt:8.30, badge:"" },
  { id:"eid-decorations", cat:"seasonal", name:"Eid Mubarak Laser-Cut Decorations", material:"Wood", price:6.20, compareAt:8.30, badge:"" }
];

/* shared helpers for rendering catalog cards (used by index + category) */
(function () {
  function money(n) { return '$' + Number(n).toFixed(2); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function cardHTML(p) {
    var mat = (p.material || '').toLowerCase() === 'acrylic' ? 'acrylic' : 'wood';
    var badge = p.badge
      ? '<span class="badge ' + (p.badge === 'Bestseller' ? 'badge-best' : 'badge-new') + '">' + esc(p.badge) + '</span>'
      : '';
    var old = p.compareAt ? '<span class="old">' + money(p.compareAt) + '</span>' : '';
    return '<a class="card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="imgbox">' + badge +
        '<span class="fav" role="button" aria-label="Add to wishlist"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3.2 1.3 4 2.5C10.8 6.3 12 5 14 5c3.5 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z"/></svg></span>' +
        '<div class="ph ' + mat + '" role="img" aria-label="' + esc(p.name) + '">' +
          '<span class="ph-mat">' + esc(p.material) + '</span>' +
          '<span class="ph-logo">HoneyWoodLand</span>' +
        '</div>' +
      '</div>' +
      '<div class="info">' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<div class="mat">' + esc(p.material) + '</div>' +
        '<div class="price">' + money(p.price) + old + '</div>' +
      '</div>' +
    '</a>';
  }

  function byId(id) {
    var list = window.HWL_PRODUCTS || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  window.HWL = { money: money, esc: esc, cardHTML: cardHTML, byId: byId };
})();

