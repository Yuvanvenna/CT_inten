// 1. Join Array Elements into a String
let myColor = ["Red", "Green", "White", "Black"];
console.log("Joined with default separator:", myColor.join()); // "Red,Green,White,Black"
console.log("Joined with comma:", myColor.join(",")); // "Red,Green,White,Black"
console.log("Joined with plus sign:", myColor.join("+")); // "Red+Green+White+Black"

// 2. Find Most Frequent Item in an Array
let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let frequency = {};
let maxCount = 0;
let maxItem;

for (let item of arr1) {
  frequency[item] = (frequency[item] || 0) + 1;
  if (frequency[item] > maxCount) {
    maxCount = frequency[item];
    maxItem = item;
  }
}

console.log(`Most frequent item: ${maxItem} ( ${maxCount} times )`); // a ( 5 times )

// 3. Truncate a String
function truncateString(str, num) {
  return str.slice(0, num);
}

console.log("Truncated string:", truncateString("Robin Singh", 4)); // "Robi"

// 4. Capitalize Each Word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log("Capitalized string:", capitalizeWords("js string exercises")); // "Js String Exercises"
