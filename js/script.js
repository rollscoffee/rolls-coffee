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
        lucide.createIcons();
        return;
    }

    renderProductList(

        menuGrid,

        filteredProducts

    );

}   // <-- penutup function renderProducts()

renderProducts();

if (typeof renderFavorites === "function") {
    renderFavorites();
}

if (typeof updateFavoriteCount === "function") {
    updateFavoriteCount();
}


if (searchInput) {

    searchInput.addEventListener(

        "input",

        debounce(() => {

            renderProducts(

                searchInput.value,

                activeFilter

            );

        }, 250)

    );

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

    // ==========================
    // Quick Add
    // ==========================

    const quickAddBtn = e.target.closest(".quick-add");

    if (quickAddBtn) {

        const id = Number(quickAddBtn.dataset.id);

        const product = products.find(p => p.id === id);

        if (!product) return;

        const image = quickAddBtn
        .closest(".product-card")
        .querySelector(".product-image");

        flyToCart(image);

        const firstSize = Object.keys(product.sizes)[0];

        const firstPrice = product.sizes[firstSize];

        addToCart({

            id: product.id,

            name: product.name,

            image: product.image,

            size: firstSize,

            bean: product.coffeeBean
            ? coffeeBeans[0]
            : null,

            sugar: product.sugar
            ? sugarLevels[2]
            : null,

            coffee: product.coffeeLevel
            ? coffeeLevels[1]
            : null,

            note: "",

            qty: 1,

            price: firstPrice

        });

        return;

    }

    // ==========================
    // Favorite
    // ==========================

    const favoriteBtn = e.target.closest(".favorite-btn");

    if (favoriteBtn) {

        toggleFavorite(Number(favoriteBtn.dataset.id));

        return;

    }

    // ==========================
    // Customize Order
    // ==========================

    const productBtn = e.target.closest(".product-btn");

    if (productBtn) {

        const id = Number(productBtn.dataset.id);

        const product = products.find(p => p.id === id);

        if (!product) return;

        openModal(product);

    }

});

