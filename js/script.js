/* ==========================================
 R olls Coffee  *
 ========================================== */

const menuGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");

const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";

function renderProducts(keyword = "", category = "all") {

    menuGrid.innerHTML = "";

    const filteredProducts = products.filter(product => {

        const keywordLower = keyword.toLowerCase();

        const matchKeyword =
        product.name.toLowerCase().includes(keywordLower) ||
        product.category.toLowerCase().includes(keywordLower);

        const matchCategory =
        category === "all" ||
        product.category === category;

        return matchKeyword && matchCategory;

    });

    if(filteredProducts.length === 0){

        menuGrid.innerHTML = `
        <div class="empty-search">
        <div class="empty-icon">

        <i data-lucide="search-x"></i>

        </div>

        <h3>Menu tidak ditemukan</h3>
        <p>Coba gunakan kata kunci lain.</p>
        </div>
        `;

        return;
    }

    filteredProducts.forEach(product => {

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

    });
    lucide.createIcons();
}

renderProducts();

if (searchInput) {

    searchInput.addEventListener("input", () => {

        renderProducts(searchInput.value, activeFilter);

    });

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        renderProducts(searchInput.value, activeFilter);

    });

});


document.addEventListener("click", (e) => {

    const quickAddBtn = e.target.closest(".quick-add");

    if (!quickAddBtn) return;

    const id = Number(quickAddBtn.dataset.id);

    const product = products.find(p => p.id === id);

    if (!product) return;

    const firstSize = Object.keys(product.sizes)[0];

    const firstPrice = product.sizes[firstSize];

    addToCart({

        id: product.id,

        name: product.name,

        image: product.image,

        size: firstSize,

        bean: "",

        sugar: "Normal",

        coffee: "Normal",

        note: "",

        qty: 1,

        price: firstPrice

    });

});

document.addEventListener("click", (e) => {

    if (!e.target.classList.contains("product-btn")) return;

    const id = Number(e.target.dataset.id);

    const product = products.find(p => p.id === id);

    if (!product) return;

    openModal(product);

});
