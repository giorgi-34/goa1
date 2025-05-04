// 1. Capitalization and Mutability
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// 2. Stringy Strings
function stringy(size) {
  return Array.from({ length: size }, (_, i) => (i % 2 === 0 ? '1' : '0')).join('');
}

// 3. Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// 4. Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return a !== b;
}

// 5. What's the real floor?
function getRealFloor(n) {
  return n <= 0 ? n : n <= 12 ? n - 1 : n - 2;
}

// 6. Stringy Strings
function stringy(size) {
  return Array.from({ length: size }, (_, i) => (i % 2 === 0 ? '1' : '0')).join('');
}

// 7. Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// 8. Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return a !== b;
}

// 9. What's the real floor?
function getRealFloor(n) {
  return n <= 0 ? n : n <= 12 ? n - 1 : n - 2;
}
