// ✅ დავალება 1:
// ფუნქცია, რომელსაც გადაეცემა 10 რიცხვი და ბეჭდავს მხოლოდ ლუწ რიცხვებს
function printEvenNumbers(a, b, c, d, e, f, g, h, i, j) {
  const args = [a, b, c, d, e, f, g, h, i, j];

  for (let num of args) {
    if (num % 2 === 0) {
      console.log("ლუწი:", num);
    }
  }
}

// ფუნქციის გამოძახება
printEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// ✅ დავალება 2:
// ორი ფუნქცია — ერთი function keyword-ით, მეორე arrow ფუნქციით

const sayHello1 = function() {
  console.log("hello from function");
};

const sayHello2 = () => {
  console.log("hello from arrow");
};

sayHello1();
sayHello2();

// ❗ კომენტარი:
// sayHello1 შეიცავს ანონიმურ ფუნქციას, რადგან function-ს არ აქვს სახელი.
// ანუ ესაა ანონიმური ფუნქცია.


// ✅ დავალება 3:
// Immediately Invoked Function Expression (IIFE), რომელიც მაშინვე აბრუნებს შედეგს

console.log(
  (function() {
    return "ეს არის IIFE-ის მიერ დაბრუნებული ტექსტი";
  })()
);


// ✅ დავალება 4:
// მაგალითები: Global, Function და Block Scope

// Global Scope
let globalVar = "მე ვარ გლობალური ცვლადი";

function exampleFunction() {
  // Function Scope
  let functionVar = "მე ვარ ფუნქციის შიდა ცვლადი";

  if (true) {
    // Block Scope
    let blockVar = "მე ვარ ბლოკის შიდა ცვლადი";
    console.log(blockVar); // მუშაობს
  }

  console.log(functionVar); // მუშაობს
  // console.log(blockVar); // შეცდომა იქნება — blockVar არ ჩანს function scope-ში
}

exampleFunction();

console.log(globalVar); // მუშაობს
// console.log(functionVar); // შეცდომა იქნება — functionVar არ ჩანს გლობალურ scope-ში
