// --- 18) Print Elements ---
let arr1 = [10, 20, 30, 40, 50];
arr1.forEach(el => console.log(el));

// --- 19) Print with Index ---
let arr2 = [10, 20, 30];
arr2.forEach((value, index) => console.log(`Index: ${index}, Value: ${value}`));

// --- 20) Sum of Numbers ---
let arr3 = [5, 10, 15];
let sum = arr3.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// --- 21) Uppercase Strings ---
let arr4 = ["apple", "banana", "cherry"];
arr4.forEach(str => console.log(str.toUpperCase()));

// --- 22) Extract Names from Objects ---
let people1 = [{ name: "Alice" }, { name: "Bob" }];
people1.forEach(p => console.log(p.name));


// ------------------------------
// --- 23–27 with map() ---
// ------------------------------

// --- 23) Square Numbers ---
let nums1 = [1, 2, 3, 4];
let squares = nums1.map(n => n * n);
console.log("Squares:", squares);

// --- 24) Double Numbers ---
let nums2 = [2, 4, 6];
let doubled = nums2.map(n => n * 2);
console.log("Doubled:", doubled);

// --- 25) Uppercase Strings ---
let words = ["hello", "world"];
let upperWords = words.map(str => str.toUpperCase());
console.log("Uppercase:", upperWords);

// --- 26) Extract Names ---
let people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
let names = people2.map(p => p.name);
console.log("Names:", names);

// --- 27) Add 10 to Numbers ---
let nums3 = [1, 5, 10];
let plusTen = nums3.map(n => n + 10);
console.log("Plus 10:", plusTen);
