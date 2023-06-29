// -- JAVASCRIPT CAFE! -- //

// PRODUCTS //

let products = {
  whiteCoffee: {
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    stock: 7,
    price: 3.5,
  },

  muffin: {
    stock: 5,
    price: 8.5,
  },

  eggs: {
    stock: 1,
    price: 12.5,
  },
};

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee: ' + products.whiteCoffee.stock;

  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock;

  document.getElementById('muffin').innerHTML =
    'muffin: ' + products.muffin.stock;

  document.getElementById('eggs').innerHTML = 'eggs: ' + products.eggs.stock;
}

displayProducts();

// Customers //

let customer = {
  order: [],
};

let minOrderSize = 1;
let maxOrderSize = 5;

function generateCustomerOrder() {
  //get a random size for the order in a range, 1-5
  //make a new array of the things they're ordering
  //assign the new order to the customer object
  //display the customer order

  let orderSize = getRandomInt(minOrderSize, maxOrderSize);

  let order = [];

  let productNames = Object.keys(products);

  console.log(productNames);
  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1);
    let productName = productNames[productIndex];
    console.log(productName);
  }
}

generateCustomerOrder();

//UTIL///

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
