// 1. The Wide-Mouthed Frog
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

// 2. Get Nth Even Number
function nthEven(n) {
  return (n - 1) * 2;
}

// 3. Replace all vowels with '!'
function replace(s) {
  return s.replace(/[aeiou]/gi, '!');
}

// 4. Return 5 without using numbers
function unusualFive() {
  return 'hello'.length;
}

// 5. Add Length
function addLength(str) {
  return str.split(' ').map(word => `{word} {word.length}`);
}
