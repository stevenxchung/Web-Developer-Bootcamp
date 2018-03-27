// NPM Exercise

// Initialize faker
var faker = require("faker");

// Function that uses faker to print out 10 random product names and prices
function fakeProducts() {
    // Print header
    console.log("=".repeat(20));
    console.log("Welcome To My Shop!");
    console.log("=".repeat(20));
    // Print 10 random products and prices
    for (var i = 0; i < 10; i++) {
        console.log(faker.commerce.productName() + " - " + "$" + faker.commerce.price());
    }
}

// Testing fakeProducts()
fakeProducts();