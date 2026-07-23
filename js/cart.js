console.log("Cart Loaded");

const cart = [];

function addToCart(item){

    const existing = cart.find(cartItem =>

    cartItem.name === item.name &&
    cartItem.size === item.size &&
    cartItem.bean === item.bean &&
    cartItem.sugar === item.sugar &&
    cartItem.coffee === item.coffee

    );

    if(existing){

        existing.qty++;

    }else{

        cart.push(item);

    }

    console.table(cart);

    renderCart();

}

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Keranjang masih kosong.</p>";

        cartTotal.textContent = "Rp0";

        cartCount.textContent = "0";

        return;

    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartItems.innerHTML += `

        <div class="cart-item">

        <h4>${item.name}</h4>

        <small>${item.size}</small><br>

        <small>${item.bean ?? ""}</small><br>

        <small>${item.sugar ?? ""}</small><br>

        <div class="cart-bottom">

        <strong>${rupiah(item.price)}</strong>

        <div class="qty-control">

        <button onclick="decreaseQty(${index})">−</button>

        <span>${item.qty}</span>

        <button onclick="increaseQty(${index})">+</button>

        </div>

        </div>

        </div>

        <hr>

        `;

    });

    cartTotal.textContent = rupiah(total);

    cartCount.textContent = cart.length;

}

const cartSidebar = document.getElementById("cart-sidebar");

const cartBtn = document.getElementById("cart-btn");

const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", () => {

    cartSidebar.classList.add("show");

});

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("show");

});

function increaseQty(index){

    cart[index].qty++;

    renderCart();

}

function decreaseQty(index){

    cart[index].qty--;

    if(cart[index].qty <= 0){

        cart.splice(index,1);

    }

    renderCart();

}
