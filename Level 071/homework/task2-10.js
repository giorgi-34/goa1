// --- Homework 1: Array Basics ---
console.log("Homework 1: Array Basics");

let fruits = ["apple", "banana", "orange", "kiwi", "mango"];
console.log("პირველი:", fruits[0]);
console.log("ბოლო:", fruits[fruits.length - 1]);
console.log("სულ:", fruits.length);

// --- Homework 2: Modifying Arrays ---
console.log("\nHomework 2: Modifying Arrays");

let colors = ["red", "green", "blue"];
colors.push("yellow");         // ბოლოში დამატება
colors.shift();                // წაშლა პირველის
colors.unshift("purple");      // დასაწყისში დამატება
console.log("ფინალური მასივი:", colors);

// --- Homework 3: Loop Through an Array ---
console.log("\nHomework 3: Loop Through an Array");

let numbers = [2, 4, 6, 8];
console.log("გაორმაგებული რიცხვები:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// --- Homework 4: sumArray Function ---
console.log("\nHomework 4: sumArray");

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log("ჯამი:", sumArray([1, 2, 3])); // უნდა დაბეჭდოს 6

// --- Homework 5: Find the Largest Number ---
console.log("\nHomework 5: Find the Largest Number");

function findLargest(arr) {
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
}
console.log("ყველაზე დიდი:", findLargest([4, 10, 2, 99, 5]));

// --- Homework 6: Array Includes Check ---
console.log("\nHomework 6: Check Favorite Movie");

let favoriteMovies = ["Inception", "Interstellar", "The Matrix", "Avatar", "Gladiator"];
let userMovie = prompt("შეიყვანე ფილმის სახელი:");
if (favoriteMovies.includes(userMovie)) {
  alert("დიახ, ეს ჩემი ფავორიტებიდან ერთ-ერთია!");
} else {
  alert("არა, ეგ არც ისე მომწონს...");
}

// --- Homework 7: Join and Sort ---
console.log("\nHomework 7: Join and Sort");

let words = ["banana", "apple", "pear", "orange"];
words.sort();
let result = words.join(", ");
console.log("დალაგებული და შეერთებული სიტყვები:", result);

// --- Extra Homework 1: Random Number Generator ---
console.log("\nExtra Homework 1: Random Number");

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log("რანდომი რიცხვი 1-დან 10:", getRandomNumber());

// --- Extra Homework 2: Round a Number ---
console.log("\nExtra Homework 2: Round a Number");

let inputNum = Number(prompt("შეიყვანე ათწილადი რიცხვი:"));
console.log("დამრგვალებული ქვემოთ:", Math.floor(inputNum));
console.log("დამრგვალებული ზემოთ:", Math.ceil(inputNum));
console.log("დამრგვალებული უახლოესში:", Math.round(inputNum));

// --- Extra Homework 3: Max and Min ---
console.log("\nExtra Homework 3: Max and Min");

let nums = [23, 45, 12, 67, 5];
console.log("მაქსიმუმი:", Math.max(...nums));
console.log("მინიმუმი:", Math.min(...nums));

// --- BONUS: Random Number Guessing Game ---
console.log("\n🎮 BONUS თამაში: გამოიცანი რიცხვი");

let randomNum = Math.floor(Math.random() * 100) + 1;

while (true) {
  let userNum = Number(prompt("შეიყვანეთ სასურველი რიცხვი (1-100):"));

  if (userNum > randomNum) {
    alert("მეტია");
  } else if (userNum < randomNum) {
    alert("ნაკლებია");
  } else if (userNum === randomNum) {
    alert("გილოცავ! სწორად გამოიცანი 🎉");
    break;
  } else {
    alert("შეიყვანე მხოლოდ რიცხვი!");
  }
}
