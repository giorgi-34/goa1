// Two strings joined
let str1 = "Hello";
let str2 = "World";
let joined = str1.concat(str2);
console.log(joined); // "HelloWorld"

// Three strings
let a = "JavaScript";
let b = " is";
let c = " fun!";
let result = a.concat(b, c);
console.log(result); // "JavaScript is fun!"

// With space between words
let word1 = "Good";
let word2 = "Morning";
let spaced = word1.concat(" ", word2);
console.log(spaced); // "Good Morning"
 



// URL check
let url = "https://example.com/";
console.log(url.endsWith("/")); // true

// Function to check if word ends with "s"
function endsWithS(word) {
  return word.endsWith("s");
}
console.log(endsWithS("cars"));   // true
console.log(endsWithS("tree"));   // false





function endsWithPunctuation(sentence) {
  return sentence.endsWith(".") || sentence.endsWith("?") || sentence.endsWith("!");
}

console.log(endsWithPunctuation("Are you ready?")); // true
console.log(endsWithPunctuation("Hello world"));    // false
console.log(endsWithPunctuation("Wow!"));           // true
