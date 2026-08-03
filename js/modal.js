console.log("Modal Loaded");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const sizeOptions = document.getElementById("size-options");
const beanOptions = document.getElementById("bean-options");
const sugarOptions = document.getElementById("sugar-options");
const coffeeOptions = document.getElementById("coffee-options");
const beanSection = document.getElementById("bean-section");
const sugarSection = document.getElementById("sugar-section");
const coffeeSection = document.getElementById("coffee-section");

let currentProduct = null;
let currentPrice = 0;

function updatePrice() {

    let price = currentPrice;

    const selectedCoffee =
    coffeeOptions.querySelector(".active")?.textContent;

    if (selectedCoffee === "Strong Coffee (+Rp4.000)") {
        price += EXTRA_SHOT_PRICE;
    }

    modalPrice.textContent = rupiah(price);

    return price;
}

function openModal(product) {

    currentProduct = product;

    modalImage.src = product.image;
    modalName.textContent = product.name;
    modalCategory.textContent = product.category;

    renderSizeOptions(product);
    renderBeanOptions(product);
    renderSugarOptions(product);
    renderCoffeeOptions(product);

    modal.style.display = "flex";
}
function closeModalWindow() {
    modal.style.display = "none";
}

closeModal.onclick = closeModalWindow;

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalWindow();
    }
});

function renderSizeOptions(product) {

    sizeOptions.innerHTML = "";

    Object.entries(product.sizes).forEach(([size, price], index) => {

        const button = document.createElement("button");

        button.className = "size-btn";

        button.innerHTML = `
        <span class="size-title">${size}</span>
        <span class="size-price">${rupiah(price)}</span>
        `;

        if (index === 0) {

            button.classList.add("active");

            currentPrice = price;

            updatePrice();

        }

        button.addEventListener("click", () => {

            document
            .querySelectorAll("#size-options .size-btn")
            .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            currentPrice = price;

            updatePrice();

        });

        sizeOptions.appendChild(button);

    });

}

function renderBeanOptions(product){

    beanOptions.innerHTML = "";

    if(!product.coffeeBean){

        beanSection.style.display = "none";

        return;

    }

    beanSection.style.display = "block";

    createOptionButtons(beanOptions, coffeeBeans);

}

function renderSugarOptions(product){

    sugarOptions.innerHTML="";

    if(!product.sugar){

        sugarSection.style.display="none";

        return;

    }

    sugarSection.style.display="block";

    createOptionButtons(sugarOptions, sugarLevels);
}

function renderCoffeeOptions(product){

    coffeeOptions.innerHTML="";

    if(!product.coffeeLevel){

        coffeeSection.style.display="none";

        return;

    }

    coffeeSection.style.display="block";

    createOptionButtons(coffeeOptions, coffeeLevels);

}

function createOptionButtons(container, items) {

    container.innerHTML = "";

    items.forEach((item, index) => {

        const button = document.createElement("button");

        button.textContent = item;

        if (index === 0) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {

            container
            .querySelectorAll("button")
            .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            if (container === coffeeOptions) {
                updatePrice();
            }

        });

        container.appendChild(button);

    });

}

const noteInput = document.getElementById("note");
const addCartButton = document.getElementById("add-cart");

addCartButton.addEventListener("click", () => {

    const selectedSize =
    sizeOptions.querySelector(".active .size-title")?.textContent;

    const selectedBean =
    beanOptions.querySelector(".active")?.textContent || null;

    const selectedSugar =
    sugarOptions.querySelector(".active")?.textContent || null;

    const selectedCoffee =
    coffeeOptions.querySelector(".active")?.textContent || null;

    const order = {

        id: currentProduct.id,

        name: currentProduct.name,

        image: currentProduct.image,

        size: selectedSize,

        bean: selectedBean,

        sugar: selectedSugar,

        coffee: selectedCoffee,

        note: noteInput.value.trim(),

                               price: updatePrice(),

                               qty: 1

    };

    console.log(order);

    addToCart(order);

    closeModalWindow();

});
