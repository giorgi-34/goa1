let products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
  { name: "USB Cable", price: 10 }
];

let cheapProducts = products.filter(product => product.price < 100);

console.log(cheapProducts);



let words = ["apple", "banana", "grape", "blueberry", "cherry"];

let firstBWord = words.find(word => word.startsWith("b"));

console.log(firstBWord); // "banana"



let numbers = [10, 20, 30, 40, 50];

numbers.splice(2, 0, 99);

console.log(numbers); // [10, 20, 99, 30, 40, 50]
