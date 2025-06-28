// 1. Sum of positive
function positiveSum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) sum += num;
  }
  return sum;
}
console.log("1. positiveSum:", positiveSum([1, -4, 7, 12])); // 20

// 2. Count by X
function countBy(x, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}
console.log("2. countBy:", countBy(2, 5)); // [2, 4, 6, 8, 10]

// 3. Moving Zeros To The End
function moveZeros(arr) {
  const nonZeros = [];
  let countZero = 0;
  for (let item of arr) {
    if (item === 0) countZero++;
    else nonZeros.push(item);
  }
  while (countZero-- > 0) {
    nonZeros.push(0);
  }
  return nonZeros;
}
console.log("3. moveZeros:", moveZeros([1, 0, 1, 2, 0, 1, 3]));

// 4. Number of People in the Bus
function number(busStops) {
  let total = 0;
  for (let [on, off] of busStops) {
    total += (on - off);
  }
  return total;
}
console.log("4. number (bus):", number([[10, 0], [3, 5], [5, 8]])); // 5

// 5. Sum of even numbers
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
}
console.log("5. sumEvenNumbers:", sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12

// 6. Isograms
function isIsogram(str) {
  str = str.toLowerCase();
  const seen = new Set();
  for (let char of str) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}
console.log("6. isIsogram:", isIsogram("Dermatoglyphics")); // true
console.log("6. isIsogram:", isIsogram("aba")); // false

// 7. Simple Pig Latin
function pigIt(str) {
  return str.split(' ').map(word => {
    if (/^[aeiouAEIOU]/.test(word)) {
      return word + 'way';
    } else {
      return word.slice(1) + word[0] + 'ay';
    }
  }).join(' ');
}
console.log("7. pigIt:", pigIt('Pig latin is cool')); 
// "igPay atinlay isway oolcay"
