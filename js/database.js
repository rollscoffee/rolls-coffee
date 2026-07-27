/* =========================================
 R OLLS COFFEE DATABASE      *
 ========================================= */

const products = [

    {
        id: 1,

        name: "Palm Sugar Latte",

        category: "Coffee",

        image: "images/products/palm-sugar.jpg",

        description:
        "Espresso, fresh milk dan gula aren premium.",

        sizes: {
            "250 ml": 18000,
            "500 ml": 35000,
            "1 L": 70000
        },

        sugar: true,

        coffeeLevel: true,

        coffeeBean: true,

        bestSeller: true
    },

{
    id: 2,

    name: "Butterscotch Latte",

    category: "Coffee",

    image: "images/products/butterscotch.jpg",

    description:
    "Espresso dengan creamy butterscotch.",

    sizes: {
        "250 ml": 20000,
        "500 ml": 40000,
        "1 L": 80000
    },

    sugar: true,

    coffeeLevel: true,

    coffeeBean: true,

    bestSeller: true
},

{
    id: 3,

    name: "Salted Caramel Latte",

    category: "Coffee",

    image: "images/products/salted-caramel.jpg",

    description:
    "Espresso dengan salted caramel premium.",

    sizes: {
        "250 ml": 22000,
        "500 ml": 43000,
        "1 L": 83000
    },

    sugar: true,

    coffeeLevel: true,

    coffeeBean: true,

    bestSeller: true
},

{
    id: 4,

    name: "Caramel Latte",

    category: "Coffee",

    image: "images/products/caramel.jpg",

    description:
    "Espresso dan caramel yang lembut.",

    sizes: {
        "250 ml": 20000,
        "500 ml": 40000,
        "1 L": 75000
    },

    sugar: true,

    coffeeLevel: true,

    coffeeBean: true,

    bestSeller: false
},

{
    id: 5,

    name: "Matcha Latte",

    category: "Non Coffee",

    image: "images/products/matcha.jpg",

    badge: "New",

    description:
    "Japanese Matcha premium.",

    sizes: {
        "250 ml": 22000,
        "500 ml": 40000,
        "1 L": 78000
    },

    sugar: true,

    coffeeLevel: false,

    coffeeBean: false,

    bestSeller: true
},

{
    id: 6,

    name: "Americano",

    category: "Coffee",

    image: "images/products/americano.jpg",

    description:
    "Double espresso dengan air panas.",

    sizes: {
        "250 ml": 11000,
        "500 ml": 22000
    },

    sugar: false,

    coffeeLevel: true,

    coffeeBean: true,

    bestSeller: false
},

{
    id: 7,

    name: "Cold Brew",

    category: "Coffee",

    image: "images/products/coldbrew.jpg",

    description:
    "Cold extraction selama 12 jam.",

    sizes: {
        "250 ml": 11000,
        "500 ml": 22000
    },

    sugar: false,

    coffeeLevel: true,

    coffeeBean: true,

    bestSeller: false
},

{
    id: 8,

    name: "Classic Latte",

    category: "Coffee",

    image: "images/menu/classic-latte.jpg",

    badge: "New",

    description: "Espresso dipadukan dengan fresh milk menghasilkan rasa kopi yang lembut, creamy, dan seimbang.",

    sizes: {
        "250 ml": 18000,
        "500 ml": 35000,
        "1 L": 70000
    },

    coffeeBean: true,

    sugar: true,

    coffeeLevel: true
}
];

const coffeeBeans = [
    "House Blend",
"100% Arabica",
"100% Robusta"
];

const sugarLevels = [
    "No Sugar",
"Less Sugar",
"Normal Sugar"
];

const coffeeLevels = [
"Less Coffee",
"Normal Coffee",
"Strong Coffee (+Rp4.000)"
];

const EXTRA_SHOT_PRICE = 4000;
