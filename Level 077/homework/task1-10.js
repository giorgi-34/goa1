// 1. Countdown Timer
let count = 10;
const countdown = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(countdown);
    console.log("Time's up!");
  }
}, 1000);

// 2. Flashing Title
let flashCount = 0;
const titles = ["Hello", "Goodbye"];
const flashInterval = setInterval(() => {
  document.title = titles[flashCount % 2];
  flashCount++;
  if (flashCount === 6) {
    clearInterval(flashInterval);
  }
}, 1000);

// 3. Move a Box (Optional DOM Task)
const box = document.createElement("div");
box.style.width = "50px";
box.style.height = "50px";
box.style.background = "blue";
box.style.position = "absolute";
box.style.left = "0px";
document.body.appendChild(box);

let position = 0;
const moveBox = setInterval(() => {
  position += 10;
  box.style.left = position + "px";
  if (position >= 100) {
    clearInterval(moveBox);
  }
}, 200);

// 4. Random Number Logger
let logCount = 0;
const randomLogger = setInterval(() => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  console.log(randNum);
  logCount++;
  if (logCount === 5) {
    clearInterval(randomLogger);
  }
}, 1500);

// 5. Array to Uppercase
const strings = ["apple", "banana", "cherry"];
for (let i = 0; i < strings.length; i++) {
  console.log(strings[i].toUpperCase());
}

// 6. Replace Middle Element
const nums = [1, 2, 3];
nums[1] = 0;
console.log(nums); // [1, 0, 3]

// 7. Add and Remove Elements
const arr = ["x", "y"];
arr.push("z");        // Add to end
arr.unshift("a");     // Add to start
arr.pop();            // Remove last
console.log(arr);     // ['a', 'x', 'y']

// 8. Average of Array
const numArray = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < numArray.length; i++) {
  sum += numArray[i];
}
console.log("Average:", sum / numArray.length);

// 9. Reverse an Array Manually
const original = ["a", "b", "c"];
console.log(original[2]);
console.log(original[1]);
console.log(original[0]);

// 10. Loop with Index
const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}
