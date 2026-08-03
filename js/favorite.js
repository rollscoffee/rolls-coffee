console.log("Favorite Loaded");

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

function isFavorite(id){

    return favorites.includes(id);

}

function updateFavoriteCount(){

    const counter = document.getElementById("favorite-count");

    if(!counter) return;

    counter.textContent = favorites.length;

    counter.classList.add("pop");

    setTimeout(()=>{

        counter.classList.remove("pop");

    },250);

}

function toggleFavorite(id){

    if(isFavorite(id)){

        favorites =
        favorites.filter(item=>item!==id);

        showToast(
            "Favorite",
            "Menu dihapus dari Favorite"
        );

    }else{

        favorites.push(id);

        showToast(
            "Favorite",
            "Menu ditambahkan ke Favorite"
        );

    }

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );
    updateFavoriteCount();
    renderProducts(

        searchInput.value,

        activeFilter

    );

    renderFavorites();

    requestAnimationFrame(()=>{

        document

        .querySelectorAll(

            `.favorite-btn[data-id="${id}"] svg`

        )

        .forEach(icon=>{

            icon.classList.add("favorite-pop");

            setTimeout(()=>{

                icon.classList.remove("favorite-pop");

            },350);

        });

    });
}



function renderFavorites(){

    const grid = document.getElementById("favorite-grid");

    if(!grid) return;

    grid.innerHTML = "";

    const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
    );

    if(favoriteProducts.length === 0){

        grid.innerHTML = `

        <div class="empty-search">

        <div class="empty-icon">

        <i data-lucide="heart"></i>

        </div>

        <h3>Belum ada Favorite</h3>

        <p>Klik ikon hati pada menu favoritmu.</p>

        </div>

        `;

        lucide.createIcons();

        return;

    }

    renderProductList(

        grid,

        favoriteProducts

    );

    lucide.createIcons();

}

