// 1) რიცხვების სიის ჯამი 50-მდე, შემდეგ გაჩერება
const sumUntilOver50 = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
    if (sum > 50) break;
  }
  return sum;
};

// 2) სტრინგების ფილტრი სიგრძის მიხედვით (>5)
const filterLongStrings = (arr) => {
  for (const str of arr) {
    if (str.length <= 5) continue;
    console.log(str);
  }
};

// 3) პირველი 5 ლუწი რიცხვის დაბეჭდვა 1-დან
const printFirst5EvenNumbers = () => {
  let count = 0;
  for (let i = 1; ; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
    count++;
    if (count === 5) break;
  }
};


// --- ტესტები ---

const numbers = [10, 5, 12, 8, 20, 7, 3];
console.log("Sum until > 50:", sumUntilOver50(numbers));  // Output: > 50 value

const strings = ["apple", "banana", "cat", "dolphin", "egg", "forest", "grape", "hat", "island", "jungle"];
console.log("Filtered strings with length > 5:");
filterLongStrings(strings);

console.log("First 5 even numbers:");
printFirst5EvenNumbers();
