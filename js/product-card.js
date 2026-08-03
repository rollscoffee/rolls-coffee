console.log("Product Card Loaded");

function createProductCard(product){

    const firstPrice = Object.values(product.sizes)[0];

    return `

    <div class="product-card">

    <button
    class="favorite-btn"
    data-id="${product.id}">

    <i
    data-lucide="heart"
    class="${isFavorite(product.id) ? "favorite-active" : ""}">
    </i>

    </button>

    <div class="badge-group">

    ${product.bestSeller
        ? `<div class="badge best">⭐ Best Seller</div>`
        : ""}

        ${product.badge
            ? `<div class="badge new">${product.badge}</div>`
            : ""}

            </div>

            <img
            src="${product.image}"
            class="product-image"
            alt="${product.name}">

            <div class="product-body">

            <span class="product-category">

            ${product.category}

            </span>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="product-price-row">

            <div class="product-price">

            <small>Mulai dari</small>

            <strong>${rupiah(firstPrice)}</strong>

            </div>

            <button
            class="quick-add"
            data-id="${product.id}"
            title="Tambah cepat">

            <i data-lucide="plus"></i>

            </button>

            </div>

            <button
            class="product-btn"
            data-id="${product.id}">

            Customize Order

            </button>

            </div>

            </div>

            `;

}

function renderProductList(container, items){

    container.innerHTML = items
    .map(createProductCard)
    .join("");

    lucide.createIcons();

}
