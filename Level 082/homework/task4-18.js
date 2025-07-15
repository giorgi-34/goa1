// 4-8) Loop with break conditions

// 4) Print 1 to 20, stop if number is 13
for (let i = 1; i <= 20; i++) {
  if (i === 13) break;
  console.log(i);
}

// 5) Loop through colors, stop at "blue"
const colors = ["red", "green", "yellow", "blue", "purple"];
for (const color of colors) {
  if (color === "blue") break;
  console.log(color);
}

// 6) Count 1 to 50, stop if divisible by 4 and 5
for (let i = 1; i <= 50; i++) {
  if (i % 4 === 0 && i % 5 === 0) break;
  console.log(i);
}

// 7) Print each letter in word, stop at "a"
const word = "javascript";
for (const ch of word) {
  if (ch === "a") break;
  console.log(ch);
}

// 8) Keep adding numbers from 1 upwards, stop when sum >= 100
let sum = 0;
let num = 1;
while (true) {
  sum += num;
  if (sum >= 100) break;
  num++;
}
console.log("Sum reached:", sum);


// 9-13) Loop with continue to skip

// 9) Print 1 to 20, skip 13
for (let i = 1; i <= 20; i++) {
  if (i === 13) continue;
  console.log(i);
}

// 10) Loop fruits, skip "banana"
const fruits = ["apple", "banana", "orange", "banana", "pear"];
for (const fruit of fruits) {
  if (fruit === "banana") continue;
  console.log(fruit);
}

// 11) Count 1 to 30, skip numbers divisible by 3
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

// 12) Print letters of word, skip "e"
const word2 = "elephant";
for (const ch of word2) {
  if (ch === "e") continue;
  console.log(ch);
}

// 13) Loop 1 to 50, skip even numbers
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}


// 14-18) Arrow functions

// 14) Add two numbers
const add = (a, b) => a + b;

// 15) Greeting message
const greet = name => `Hello, ${name}!`;

// 16) Double array numbers
const doubleNumbers = arr => arr.map(num => num * 2);

// 17) Check if number is even
const isEven = num => num % 2 === 0;

// 18) Get string length
const getLength = str => str.length;


// Testing arrow functions:
console.log(add(4, 5));           // 9
console.log(greet("John"));       // Hello, John!
console.log(doubleNumbers([1,2,3])); // [2,4,6]
console.log(isEven(10));          // true
console.log(isEven(7));           // false
console.log(getLength("ChatGPT")); // 7
