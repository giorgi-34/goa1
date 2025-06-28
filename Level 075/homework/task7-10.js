// 7) Create an array of 4 numbers and log the value of the second element.
const numbers = [10, 20, 30, 40];
console.log("7) Second element:", numbers[1]); // 20

// 8) Change the value of the first element in an array to 100 and log the entire array.
numbers[0] = 100;
console.log("8) Modified array:", numbers); // [100, 20, 30, 40]

// 9) Create an array of 3 strings and log each one using individual console.log() statements with direct indexing.
const fruits = ["apple", "banana", "cherry"];
console.log("9) Fruit 1:", fruits[0]);
console.log("9) Fruit 2:", fruits[1]);
console.log("9) Fruit 3:", fruits[2]);

// 10) Create an array of 5 numbers and find the sum of the first and last elements using indexing.
const values = [5, 10, 15, 20, 25];
const sumFirstLast = values[0] + values[values.length - 1];
console.log("10) Sum of first and last elements:", sumFirstLast); // 30
