// Check if ends with "World"
console.log("Hello World".endsWith("World")); // true

// Check if filename ends with .pdf
console.log("filename.pdf".endsWith(".pdf")); // true

// URL check for ending slash
console.log("https://example.com/".endsWith("/")); // true

// Function: ends with "s"
function endsWithS(word) {
  return word.endsWith("s");
}
console.log(endsWithS("books")); // true
console.log(endsWithS("pen"));   // false

// Using optional length parameter
console.log("JavaScript".endsWith("Java", 4)); // true
