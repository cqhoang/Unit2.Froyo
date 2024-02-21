// Prompt the user for froyo flavors upon entering the website
const userInputString = prompt("Please enter a list of froyo flavors.");

// Split the user's input into an array of strings
const flavors = userInputString.split(",");
console.log(flavors);

// Count flavors
function countFlavors(flavors) {
  let countFlavors = {};
  for (let i = 0; i < flavors.length; i++) {
    // trim space from flavor
    const trimmedFlavor = flavors[i].trim();
    if (countFlavors[flavors[i]]) {
      countFlavors[flavors[i]] += 1;
    } else {
      countFlavors[flavors[i]] = 1;
    }
  }
  return countFlavors;
}

const flavorCounts = countFlavors(flavors);

// Change console output based on user input
let totalCount = 0;
for (let flavor in flavorCounts) {
  totalCount += flavorCounts[flavor];
}
console.log(`You have placed ${totalCount} order(s) of froyo.`);

// display in a table
console.table(flavorCounts);
