/* ==========================================
 R olls Coffee  *
 ========================================== */

const menuGrid = document.getElementById("product-grid");

function rupiah(number) {
    return "Rp" + number.toLocaleString("id-ID");
}

function renderProducts() {

    menuGrid.innerHTML = "";

    products.forEach(product => {

        const firstPrice = Object.values(product.sizes)[0];

        const sizes = Object.entries(product.sizes)
        .map(([size, price], index) => {

            return `
            <button
            class="size-btn ${index === 0 ? "active" : ""}"
            data-price="${price}"
            data-size="${size}">
            ${size}
            </button>
            `;

        }).join("");

        menuGrid.innerHTML += `

        <div class="product-card">

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

            <div class="product-price">

            <small>Mulai dari</small>

            <strong>${rupiah(firstPrice)}</strong>

            </div>

            <button
            class="product-btn"
            data-id="${product.id}">

            Customize Order

            </button>

            </div>

            </div>

            `;

    });

}

renderProducts();
document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("product-btn")) return;

    const id = Number(e.target.dataset.id);

    const product = products.find(p => p.id === id);

    if (!product) return;

    openModal(product);

});
