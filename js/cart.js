console.log("Cart Loaded");

const cart = [];

function addToCart(item){

    const existing = cart.find(cartItem =>

    cartItem.name === item.name &&
    cartItem.size === item.size &&
    cartItem.bean === item.bean &&
    cartItem.sugar === item.sugar &&
    cartItem.coffee === item.coffee &&
    cartItem.note === item.note

    );

    if(existing){

        existing.qty++;

    }else{

        cart.push(item);

    }

    console.table(cart);

    renderCart();

    showToast(
        "Berhasil",
        `${item.name} ditambahkan ke keranjang`
    );

}

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <div class="empty-cart">

        <div class="empty-cart-icon">🛒</div>

        <h3>Keranjang Masih Kosong</h3>

        <p>
        Yuk pilih minuman favoritmu dan mulai order sekarang.
        </p>

        <button class="empty-cart-btn" onclick="closeCartAndScroll()">
        Lihat Menu
        </button>

        </div>
        `;

        cartTotal.textContent = "Rp0";

        cartCount.textContent = "0";

        return;

    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

    cartItems.innerHTML += `

    <div class="cart-item">

    <img
    src="${item.image}"
    class="cart-image"
    alt="${item.name}">

    <div class="cart-info">

    <h4>${item.name}</h4>

    <p>${item.size}</p>

    ${item.bean ? `<small>${item.bean}</small>` : ""}

    ${item.sugar ? `<small>${item.sugar}</small>` : ""}

    ${item.coffee ? `<small>${item.coffee}</small>` : ""}

    ${item.note ? `<small><em>${item.note}</em></small>` : ""}

    <div class="cart-bottom">

    <strong>${rupiah(item.price * item.qty)}</strong>

    <div class="qty-control">

    <button onclick="decreaseQty(${index})">−</button>

    <span>${item.qty}</span>

    <button onclick="increaseQty(${index})">+</button>

    <button
    class="cart-remove"
    onclick="removeItem(${index})"
    title="Hapus Produk">

    <i data-lucide="trash-2"></i>

    </button>

    </div>

    </div>

    </div>

    </div>
    `;

    total += item.price * item.qty;

    });

    cartTotal.textContent = rupiah(total);

    const totalQty = cart.reduce(

        (sum, item) => sum + item.qty,

        0

    );

    cartCount.textContent = totalQty;
    cartCount.classList.add("pop");

    setTimeout(() => {

        cartCount.classList.remove("pop");

    }, 250);

}

const cartSidebar = document.getElementById("cart-sidebar");

const cartOverlay = document.getElementById("cart-overlay");

const cartBtn = document.getElementById("cart-btn");

const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", () => {

    cartSidebar.classList.add("show");
    cartOverlay.classList.add("show");

});

function closeCartSidebar(){

    cartSidebar.classList.remove("show");
    cartOverlay.classList.remove("show");

}

closeCart.addEventListener("click", closeCartSidebar);

cartOverlay.addEventListener("click", closeCartSidebar);

function increaseQty(index){

    cart[index].qty++;

    renderCart();
    lucide.createIcons();

}

function decreaseQty(index){

    cart[index].qty--;

    if(cart[index].qty <= 0){

        cart.splice(index,1);

    }

    renderCart();

}

function removeItem(index){

    const product = cart[index];

    cart.splice(index,1);

    renderCart();

    showToast(
        "Produk dihapus",
        `${product.name} berhasil dihapus`
    );

}

function closeCartAndScroll(){

    closeCartSidebar();

    document
    .getElementById("menu")
    ?.scrollIntoView({
        behavior:"smooth"
    });

}
