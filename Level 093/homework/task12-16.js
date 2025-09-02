// 12) Convert whole number string to number
let wholeStr = prompt("Enter a whole number as a string (e.g., '25'):");
let wholeNum = parseInt(wholeStr);
console.log("Converted number:", wholeNum);

// 13) Add two whole number strings
let strNum1 = prompt("Enter first whole number as string:");
let strNum2 = prompt("Enter second whole number as string:");
let sum = parseInt(strNum1) + parseInt(strNum2);
console.log("Sum of numbers:", sum);

// 14) Extract number from '55px'
let pxValue = prompt("Enter a value like '55px':");
let pxNumber = parseInt(pxValue);
console.log("Extracted number:", pxNumber);

// 15) Use parseInt on '20px' and '15.9' then add them
let val1 = prompt("Enter first value (e.g., '20px'):");
let val2 = prompt("Enter second value (e.g., '15.9'):");
let sumParsed = parseInt(val1) + parseInt(val2);
console.log("Sum after parseInt:", sumParsed);

// 16) Hexadecimal '0xF'
let hexStr = prompt("Enter a hexadecimal value (e.g., '0xF'):");
let hexNum = parseInt(hexStr);
console.log("Converted hexadecimal:", hexNum);
