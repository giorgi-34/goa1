// ===================== 1–6 =====================
// 1) indexOf
let str1 = "banana";
let firstIndex = str1.indexOf("a");
let secondIndex = str1.indexOf("a", firstIndex + 1);
console.log("First 'a' index:", firstIndex);
console.log("Second 'a' index:", secondIndex);

let str2 = "Hello world";
console.log("'world' exists:", str2.indexOf("world") !== -1);

// 2) replace
let sentence1 = "The cat is sleeping";
console.log(sentence1.replace("cat", "dog"));
console.log("banana".replace("a", "@"));
console.log("Hello world".replace("world", "JavaScript"));

// 3) slice
console.log("Hello world".slice(6, 11));
console.log("JavaScript is fun".slice(0, 5));
console.log("Python".slice(1));

// 4) at()
console.log("JavaScript".at(0));
console.log("OpenAI".at(-1));
console.log("Programming".at(4));
function middleChar(text) { return text.at(Math.floor(text.length/2)); }
console.log(middleChar("Hello"));
console.log("Hello World".at(-2));

// 5) concat()
console.log("Hello".concat("World"));
console.log("Good".concat(" ", "Morning"));
console.log("Age: ".concat(String(25)));
console.log("Wow".concat("!"));
console.log("Test".concat(""));

// 6) endsWith()
console.log("Hello World".endsWith("World"));
console.log("filename.pdf".endsWith(".pdf"));
console.log("https://example.com/".endsWith("/"));
function endsWithS(word){ return word.endsWith("s"); }
console.log(endsWithS("books"));
console.log("JavaScript".endsWith("Java", 4));

// ===================== 7–11 =====================
// 7) includes
console.log("The quick brown fox jumps over the lazy dog".includes("dog"));
function containsAt(str){ return str.includes("@"); }
console.log(containsAt("test@example.com"));
console.log("JavaScript".includes("Java"));
console.log("pineapple".includes("apple"));
function containsNot(sentence){ return sentence.includes("not"); }
console.log(containsNot("Do not worry"));

// 8) indexOf
console.log("The quick brown fox jumps over the lazy dog".indexOf("fox"));
console.log("Hello world".indexOf("o"));
console.log("Happy New Year 2025!".indexOf("2025"));
console.log("This is a simple test".indexOf("is"));
function atIndex(str){ return str.indexOf("@"); }
console.log(atIndex("test@example.com"));

// 9) lastIndexOf
console.log("Hello world".lastIndexOf("o"));
console.log("banana".lastIndexOf("a"));
console.log("This is a test, and it is simple".lastIndexOf("is"));
console.log("dog dog dog".lastIndexOf("dog"));
console.log("Happy 2025, welcome 2025!".lastIndexOf("2025"));

// ===================== 12–16 =====================
// repeat()
console.log("ha".repeat(3));
console.log("*".repeat(10));
console.log("---".repeat(5));
function repeatWord(word,n){ return word.repeat(n); }
console.log(repeatWord("Hello",3));
console.log("Hello ".repeat(4));

// replace first occurrence
console.log("The cat chased the cat".replace("cat","dog"));
console.log("JavaScript is cool".replace("Java","Type"));
function replaceFirstSpace(str){ return str.replace(" ","-"); }
console.log(replaceFirstSpace("Hello World"));
console.log("banana".replace("a","@"));
console.log("Happy New Year 2024!".replace("2024","2025"));

// replaceAll
console.log("The cat chased another cat and found a cat".replaceAll("cat","dog"));
console.log("I love JavaScript so much".replaceAll(" ","-"));
console.log("banana".replaceAll("a","@"));
console.log("2024 was great, but 2024 is over".replaceAll("2024","2025"));
console.log("Wait. Stop. Go. Run.".replaceAll(".","!"));

// slice
console.log("Hello world".slice(6,11));
console.log("JavaScript".slice(0,4));
console.log("Python".slice(1));
console.log("Banana".slice(-3));
function firstHalf(str){ return str.slice(0,Math.floor(str.length/2)); }
console.log(firstHalf("JavaScript"));

// ===================== 17–21 =====================
// parseInt / parseFloat examples
let numStr = prompt("Enter a whole number as string:");
console.log("parseInt:", parseInt(numStr));

let numStr1 = prompt("Enter first whole number:");
let numStr2 = prompt("Enter second whole number:");
console.log("Sum with parseInt:", parseInt(numStr1)+parseInt(numStr2));

let pxStr = prompt("Enter a value like '55px':");
console.log("parseInt px:", parseInt(pxStr));

let val1 = prompt("Enter first value like '20px':");
let val2 = prompt("Enter second value like '15.9':");
console.log("Sum parseInt:", parseInt(val1)+parseInt(val2));

let hexStr = prompt("Enter hex like '0xF':");
console.log("parseInt hex:", parseInt(hexStr));

// ===================== 22–26 =====================
// parseFloat examples
let price1 = prompt("Enter first item price (decimal):");
let price2 = prompt("Enter second item price (decimal):");
console.log("Total price:", parseFloat(price1)+parseFloat(price2));

let bill = prompt("Enter bill amount:");
let tipPercent = prompt("Enter tip %:");
let billNum = parseFloat(bill);
let tip = billNum * parseFloat(tipPercent)/100;
console.log("Total with tip:", billNum+tip);

let celsius = prompt("Enter temperature in Celsius:");
console.log("Fahrenheit:", parseFloat(celsius)*9/5+32);

let weight = prompt("Enter weight in kg:");
let height = prompt("Enter height in meters:");
console.log("BMI:", parseFloat(weight)/(parseFloat(height)**2));

let distance = prompt("Enter distance traveled:");
let fuel = prompt("Enter fuel used:");
console.log("Km per liter:", parseFloat(distance)/parseFloat(fuel));

// ===================== 27–31 =====================
// concat()
console.log("Hello".concat("World"));
console.log("Good".concat(" ","Morning"));
console.log("Age: ".concat(String(25)));
console.log("Wow".concat("!"));
console.log("Test".concat(""));

// ===================== 32–36 =====================
// at()
console.log("JavaScript".at(0));
console.log("OpenAI".at(-1));
console.log("Programming".at(4));
console.log(middleChar("Hello"));
console.log("Hello World".at(-2));

// includes()
console.log("The quick brown fox jumps over the lazy dog".includes("dog"));
console.log(containsAt("test@example.com"));
console.log("JavaScript".includes("Java"));
console.log("pineapple".includes("apple"));
console.log(containsNot("Do not worry"));

// slice examples
console.log("Hello world".slice(6,11));
console.log("JavaScript".slice(0,4));
console.log("Python".slice(1));
console.log("Banana".slice(-3));
console.log(firstHalf("JavaScript"));
