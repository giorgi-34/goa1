// Helpers
const isPrime = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

// --- 13) Positive Number Check ---
const hasPositive = (arr) => arr.some(x => typeof x === "number" && x > 0);

// --- 14) Even Number Check ---
const hasEven = (arr) => arr.some(x => typeof x === "number" && x % 2 === 0);

// --- 15) String Length > 5 Check ---
const hasLongString = (arr) => arr.some(x => typeof x === "string" && x.length > 5);

// --- 16) Falsy Value Detection (0, false, null, undefined, "", NaN) ---
const hasFalsy = (arr) => arr.some(x => !x);

// --- 17) Prime Number Detection ---
const hasPrime = (arr) => arr.some(isPrime);

// --- Demo ---
const a1 = [-3, 0, -1, 7];                  // positive? -> true
const a2 = [1, 3, 5, 7];                     // even? -> false
const a3 = ["hi", "banana", "cat"];          // long string? -> true ("banana")
const a4 = [1, "ok", NaN];                   // falsy? -> true (NaN)
const a5 = [4, 6, 8, 11];                    // prime? -> true (11)

console.log("13) hasPositive:", hasPositive(a1));
console.log("14) hasEven:", hasEven(a2));
console.log("15) hasLongString:", hasLongString(a3));
console.log("16) hasFalsy:", hasFalsy(a4));
console.log("17) hasPrime:", hasPrime(a5));
