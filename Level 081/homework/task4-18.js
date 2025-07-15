// 4-8) do...while ციკლებით

// 4) Print numbers 1 to 5
let i = 1;
do {
  console.log(i);
  i++;
} while(i <= 5);

// 5) Print even numbers 2 to 10
i = 2;
do {
  console.log(i);
  i += 2;
} while(i <= 10);

// 6) Print numbers 10 down to 1
i = 10;
do {
  console.log(i);
  i--;
} while(i >= 1);

// 7) Ask user to enter number until > 100
let num;
do {
  num = Number(prompt("შეიყვანეთ რიცხვი (>100):"));
} while(num <= 100);

// 8) Sum numbers 1 to 10 and print total
i = 1;
let sum = 0;
do {
  sum += i;
  i++;
} while(i <= 10);
console.log("Sum 1 to 10 =", sum);

// 9-13) for...of ციკლით

const numbers = [1, 2, 3, 4, 5];
const names = ["Anna", "Bob", "Charlie"];
const str = "Hello";

// 9) Print each number
for (const n of numbers) {
  console.log(n);
}

// 10) Print each character of string
for (const ch of str) {
  console.log(ch);
}

// 11) Sum all numbers and print total
sum = 0;
for (const n of numbers) {
  sum += n;
}
console.log("Sum of array =", sum);

// 12) Print only even numbers
for (const n of numbers) {
  if (n % 2 === 0) {
    console.log("Even:", n);
  }
}

// 13) Print all names
for (const name of names) {
  console.log("Name:", name);
}

// 14-18) for...in ციკლით

const obj = {
  firstName: "David",
  lastName: "Smith",
  age: 30,
  isStudent: false
};

// 14) Print all keys
for (const key in obj) {
  console.log("Key:", key);
}

// 15) Print all values
for (const key in obj) {
  console.log("Value:", obj[key]);
}

// 16) Count number of properties
let count = 0;
for (const key in obj) {
  count++;
}
console.log("Number of properties:", count);

// 17) Check if a key exists
const keyToCheck = "age";
let exists = false;
for (const key in obj) {
  if (key === keyToCheck) {
    exists = true;
    break;
  }
}
console.log(`Key "${keyToCheck}" exists?`, exists);

// 18) Create string listing all keys
let keysStr = "";
for (const key in obj) {
  keysStr += key + " ";
}
console.log("All keys:", keysStr.trim());
