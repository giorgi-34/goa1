// 2. Print all arguments using a loop
function printAllArgs() {
  console.log("2. All arguments:");
  for (let arg of arguments) {
    console.log(arg);
  }
}
printAllArgs(1, "hello", true, 9);

// 3. Count how many arguments were passed
function countArgs() {
  console.log("3. Count of arguments:", arguments.length);
}
countArgs(5, 6, 7, "a");

// 4. Add all numeric arguments
function sumNumbers() {
  let sum = 0;
  for (let arg of arguments) {
    if (typeof arg === "number") {
      sum += arg;
    }
  }
  console.log("4. Sum of numbers:", sum);
}
sumNumbers(1, 2, "a", 3);

// 5. Stop printing when finding 0
function stopAtZero() {
  console.log("5. Stop at 0:");
  for (let arg of arguments) {
    if (arg === 0) break;
    console.log(arg);
  }
}
stopAtZero(5, 3, 0, 8);

// 6. Skip string arguments and print only numbers
function printOnlyNumbers() {
  console.log("6. Only numbers:");
  for (let arg of arguments) {
    if (typeof arg === "string") continue;
    console.log(arg);
  }
}
printOnlyNumbers(1, "skip me", 2, "text", 3);

// 7. Anonymous function assigned to variable (multiply)
let multiply = function(a, b) {
  return a * b;
};
console.log("7. Multiply:", multiply(3, 4)); // 12

// 8. Anonymous function in setInterval
setInterval(function() {
  console.log("8. Logging every 2 seconds (stop manually if needed)");
}, 2000); // ⏱️ შეიძლება 1-2 ჯერ ნახო შედეგი და გაჩერდე

// 9. Anonymous function as event listener
document.body.innerHTML += '<button id="myButton">Click Me</button>';
document.getElementById("myButton").addEventListener("click", function() {
  alert("9. Button was clicked!");
});

// 10. Local variable and trying to access it outside
function localVarFunc() {
  let localVar = "I'm local";
}
localVarFunc();
// console.log(localVar); // ❌ ReferenceError: localVar is not defined

// 11. Nested function modifying outer variable
function outerFunc() {
  let counter = 0;

  function innerFunc() {
    counter += 1;
    console.log("11. Inside inner:", counter);
  }

  console.log("11. Before inner:", counter);
  innerFunc();
  console.log("11. After inner:", counter);
}
outerFunc();

// 12. var, let, const scope difference
function scopeExample() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }

  console.log("12. var a:", a); // ✅ 1
  // console.log("let b:", b); // ❌ ReferenceError
  // console.log("const c:", c); // ❌ ReferenceError
}
scopeExample();

// 13. IIFE printing "Hello, world!"
(function() {
  console.log("13. Hello, world!");
})();

// 14. IIFE calculating square
(function(num) {
  console.log("14. Square of number:", num * num);
})(5);

// 15. IIFE summing array
(function(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log("15. Sum of array:", sum);
})([1, 2, 3, 4, 5]);
