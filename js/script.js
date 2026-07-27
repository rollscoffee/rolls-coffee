/* ==========================================
 R olls Coffee  *
 ========================================== */

const menuGrid = document.getElementById("menu-grid");

function rupiah(number) {
    return "Rp" + number.toLocaleString("id-ID");
}

function renderProducts() {

    menuGrid.innerHTML = "";

    products.forEach(product => {

        const firstPrice = Object.values(product.sizes)[0];

        menuGrid.innerHTML += `

        <div class="product-card">

        ${product.bestSeller
            ? `<div class="badge best">⭐ Best Seller</div>`
            : ""}

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

            <div class="product-size">
            ${sizes}
            </div>

            <div class="product-price">
            ${rupiah(firstPrice)}
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
