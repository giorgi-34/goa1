let strings = [
  "short",
  "hello",
  "javascript",
  "openai",
  "supercalifragilistic",
  "array",
  "programming",
  "hi",
  "student",
  "charactersCheck"
];

let hasLongString = strings.some(str => str.length > 10);

console.log("Any string longer than 10 characters? ", hasLongString);




let numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});




let fruits = ["apple", "banana", "cherry", "grape", "melon"];

let upperFruits = fruits.map(str => str.toUpperCase());

console.log(upperFruits);
