// 1) Sum of positive numbers
function positiveSum(arr) {
  return arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
}

// 2) Simple multiplication
function simpleMultiplication(number) {
  return number * (number % 2 === 0 ? 8 : 9);
}

// 3) Convert string to array
function stringToArray(string) {
  return string.split(" ");
}

// 4) Find missing letter
function findMissingLetter(array) {
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i].charCodeAt(0) + 1 !== array[i+1].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
  // თუ არაფერი არ იპოვეს, შეიძლება undefined დაბრუნდეს
}

// 5) Digitize number to reversed array
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}

// --- მაგალითები ტესტირებისთვის ---

console.log(positiveSum([1, -4, 7, 12])); // 20
console.log(simpleMultiplication(5)); // 45
console.log(stringToArray("Hello world from ChatGPT")); // ["Hello", "world", "from", "ChatGPT"]
console.log(findMissingLetter(['a','b','c','d','f'])); // "e"
console.log(digitize(35231)); // [1,3,2,5,3]
