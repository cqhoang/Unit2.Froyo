// Prompt the user for froyo flavors upon entering the website
const userInputString = prompt("Please enter a list of froyo flavors.");

// Split the user's input into an array of strings
const flavors = userInputString.split(",");

// Use a loop to iterate through the array of flavors
for (let i = 0; i < flavors.length; i++) {
  console.log(flavors[i]);
}

// Count the number of orders for each flavor
function countFlavorOrders(flavors) {
  let countFlavorsOrders = {};
  if (countFlavorsOrders[flavors]) {
    flavorCountOrders[flavors]++;
  } else {
    flavorCountOrders[flavors] = 1;
  }
}

for (let flavors in countFlavorOrders) {
  console.log(
    `Thank you for ordering ${countFlavorsOrders[flavors]} of ${flavors} flavor(s).`
  );
}

// Count the number of each flavor in the user's input

// Display object in a table
console.table(flavors);

//  First attempt below:
// const flavors = ["vanilla", "strawberry", "coffee"];

// const orders = [
//   "vanilla",
//   "vanilla",
//   "vanilla",
//   "strawberry",
//   "coffee",
//   "coffee",
// ];

// const flavorscount = {};

// for (let i = 0; i < orders.length; i++) {
//     const flavors = orders[i];
//     if
// }

// const flavors = {
//   vanilla: 3,
//   strawberry: 1,
//   coffee: 2,
// };
