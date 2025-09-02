let expr = prompt("Enter a math expression (e.g., 12.5 + 7.3 * 2):");

// 1. Use eval() to calculate the result
let result = eval(expr);

// 2. Use parseInt() on the result
let intResult = parseInt(result);

// 3. Use parseFloat() on the result
let floatResult = parseFloat(result);

// 4. Display all four
console.log("Original expression:", expr);
console.log("Evaluated result:", result);
console.log("Integer conversion:", intResult);
console.log("Float conversion:", floatResult);
