let str1 = "banana";

// First occurrence of "a"
let firstIndex = str1.indexOf("a");
console.log("First 'a' index:", firstIndex); // 1

// Second occurrence of "a"
let secondIndex = str1.indexOf("a", firstIndex + 1);
console.log("Second 'a' index:", secondIndex); // 3

// Check if "world" exists in "Hello world"
let str2 = "Hello world";
if (str2.indexOf("world") !== -1) {
  console.log("'world' exists in the string");
} else {
  console.log("'world' does not exist in the string");
}
