// 1. Declare and initialize an empty multidimensional array
let multiArray = [];

// 2. Declare and initialize a multidimensional array representing a matrix
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

// 3. Print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Multiplication table
let tableNum = parseInt(prompt("Enter table number:"));
let tableLength = parseInt(prompt("Enter table length:"));
for (let i = 1; i <= tableLength; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

// 5. Print items of an array
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 6. Generate series
document.write("Counting: " + [...Array(15).keys()].map(x => x + 1).join(", ") + "<br>");
document.write("Reverse counting: " + [...Array(10).keys()].reverse().map(x => x + 1).join(", ") + "<br>");
document.write("Even: " + [...Array(11).keys()].map(x => x * 2).join(", ") + "<br>");
document.write("Odd: " + [...Array(10).keys()].map(x => x * 2 + 1).join(", ") + "<br>");
document.write("Series: " + [...Array(10).keys()].map(x => (x + 1) * 2 + "k").join(", ") + "<br>");

// 7. Search by user input
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter item to search:").toLowerCase();
if (A.includes(searchItem)) {
  alert(`${searchItem} is available in our bakery.`);
} else {
  alert(`${searchItem} is not available in our bakery.`);
}

// 8. Identify the largest number
let numbers = [24, 53, 78, 91, 12];
console.log("Largest number is: ", Math.max(...numbers));

// 9. Identify the smallest number
console.log("Smallest number is: ", Math.min(...numbers));

// 10. Print multiples of 5 from 1 to 100
console.log("Multiples of 5:");
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}
