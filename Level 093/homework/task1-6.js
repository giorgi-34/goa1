// 1) Simple expression
let expr1 = prompt("Enter a math expression (e.g., 5+3):");
console.log("Result:", eval(expr1));

// 2) Expression with parentheses
let expr2 = prompt("Enter an expression with parentheses (e.g., (8+2)*3):");
console.log("Result:", eval(expr2));

// 3) Division
let expr3 = prompt("Enter a division (e.g., 100/4):");
console.log("Result:", eval(expr3));

// 4) Square of a number
let num = prompt("Enter a number to square:");
console.log("Square:", eval(num + "*" + num));

// 5) Expression stored in variable
let exp = "20-7";
console.log("Stored expression:", exp);
console.log("Result:", eval(exp));
