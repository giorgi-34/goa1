// 7) Check if input is a number or not
let input1 = prompt("Enter something:");
if (isNaN(input1)) {
  console.log("Not a number");
} else {
  console.log("Is a number");
}

// 8) Age check
let age = prompt("Enter your age:");
if (isNaN(age)) {
  console.log("Invalid age");
} else {
  console.log("Valid age");
}

// 9) Two values check
let v1 = prompt("Enter first value:");
let v2 = prompt("Enter second value:");

if (isNaN(v1)) {
  console.log("First value: Not a number");
} else {
  console.log("First value: Is a number");
}

if (isNaN(v2)) {
  console.log("Second value: Not a number");
} else {
  console.log("Second value: Is a number");
}

// 10) Detect number or text
let input2 = prompt("Type anything:");
if (isNaN(input2)) {
  console.log("This is text");
} else {
  console.log("This is a number");
}

// 11) Simple calculator with validation
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input(s). Please enter numbers only.");
} else {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Invalid operator";
  }

  console.log("Result:", result);
}
