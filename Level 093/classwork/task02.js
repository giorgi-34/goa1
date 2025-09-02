let str1 = prompt("Enter first decimal number (as string):");
let str2 = prompt("Enter second decimal number (as string):");

// 1. Convert with parseInt() and add
let sumInt = parseInt(str1) + parseInt(str2);
console.log("Sum with parseInt:", sumInt);

// 2. Convert with parseFloat() and add
let sumFloat = parseFloat(str1) + parseFloat(str2);
console.log("Sum with parseFloat:", sumFloat);

// 3. Compare the two sums
if (sumInt === sumFloat) {
  console.log("The sums are equal (===)");
} else {
  console.log("The sums are NOT equal (===)");
}
