// 1) sumNumbers ფუნქცია — while ციკლით და continue-ით
function sumNumbers() {
  let sum = 0;
  let i = 0;
  while (i <= 10) {
    if (i % 2 !== 0) {
      i++;
      continue;  // კენტი რიცხვების გათვალისწინება არ არის
    }
    sum += i;
    i++;
  }
  return sum;
}

console.log("Sum of even numbers from 0 to 10:", sumNumbers()); // 30 (0+2+4+6+8+10)

// 2) Day of the Week Message - switch case
function dayOfWeek(dayNumber) {
  switch(dayNumber) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day number"); 
  }
}

dayOfWeek(3);  // Output: Wednesday
dayOfWeek(7);  // Output: Sunday
dayOfWeek(9);  // Output: Invalid day number

// 3) Arrow function isEven
const isEven = (num) => num % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false
