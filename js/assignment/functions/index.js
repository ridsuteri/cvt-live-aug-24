// Question 1

// Given an array of products, where each product is an object with properties like name, category, and price, write a function that:
// Filters out products under a certain price.
// Maps the filtered products to a new array where each product has a discount applied.
// Uses reduce to find the total price of the discounted products.

const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Phone", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Fashion", price: 100 },
];

function processProducts(products, minPrice, discountPercentage) {
  // Step 1: Filter out products under a certain price
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice
  );

  // Step 2: Map the filtered products and apply a discount
  const discountedProducts = filteredProducts.map((product) => {
    const discount = product.price * (discountPercentage / 100);
    return {
      ...product,
      discountedPrice: product.price - discount,
    };
  });

  // Step 3: Use reduce to calculate the total price of the discounted products
  const totalPrice = discountedProducts.reduce(
    (total, product) => total + product.discountedPrice,
    0
  );

  return { discountedProducts, totalPrice };
}

const minPrice = 200;
const discountPercentage = 10;

const result = processProducts(products, minPrice, discountPercentage);

console.log(result.discountedProducts);
console.log("Total Price:", result.totalPrice);

//   Question 2:
// Implement a higher-order function applyFunction(arr, fn) that takes an array arr and a function fn. The function should apply the passed function fn to each element of the array.

// Test it with functions like squaring numbers, converting to uppercase, etc.

function applyFunction(arr, fn) {
  return arr.map(fn);
}

console.log(applyFunction([1, 2, 3], (num) => num * num));

console.log(applyFunction(["apple", "banana"], (str) => str.toUpperCase()));
