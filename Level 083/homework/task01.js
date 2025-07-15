// 🔷 Homework 2: Filter Positive Numbers from Array
const logPositiveNumbers = arr => {
  for (const num of arr) {
    if (num <= 0) continue;
    console.log(num);
  }
};

// 🔷 Homework 3: Find First Word With More Than 5 Letters
const findFirstLongWord = words => {
  for (const word of words) {
    if (word.length > 5) {
      console.log(word);
      break;
    }
  }
};

// 🔷 Homework 4: Sum Numbers Until a Negative Is Found
const sumUntilNegative = arr => {
  let sum = 0;
  for (const num of arr) {
    if (num < 0) break;
    sum += num;
  }
  console.log("Sum before negative:", sum);
};

// 🔷 Homework 5: Show Numbers Except Multiples of 3
const printExceptMultiplesOf3 = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
};

// 🔶 Homework 6: Count How Many Words Start with "A"
const countWordsStartingWithA = words => {
  let count = 0;
  for (const word of words) {
    if (word.length < 1) continue;
    if (word[0].toLowerCase() === "a") count++;
  }
  console.log("Words starting with A:", count);
};

// 🔶 Homework 7: Print Numbers 1–30 But Skip Multiples of 4 and 6
const printSkipMultiplesOf4And6 = () => {
  for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0 || i % 6 === 0) continue;
    console.log(i);
  }
};

// 🔶 Homework 8: Find First Name Longer Than 8 Characters
const findFirstLongName = names => {
  for (const name of names) {
    if (name.length > 8) {
      console.log("First long name:", name);
      break;
    }
  }
};

// 🔶 Homework 9: Print Only Odd Numbers From an Array
const printOddNumbers = arr => {
  for (const num of arr) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
};

// 🔶 Homework 10: Sum Only Positive Even Numbers From an Array
const sumPositiveEven = arr => {
  let sum = 0;
  for (const num of arr) {
    if (num <= 0 || num % 2 !== 0) continue;
    sum += num;
  }
  console.log("Sum of positive even numbers:", sum);
};


// ---- ტესტირებისთვის ----

logPositiveNumbers([-3, 0, 5, 7, -1, 10]); 
// 5, 7, 10

findFirstLongWord(["cat", "apple", "banana", "elephant"]);
// banana

sumUntilNegative([1, 2, 3, -4, 5]);
// 6

printExceptMultiplesOf3();

countWordsStartingWithA(["apple", "banana", "Apricot", "avocado", "pear", "a"]);
// 4

printSkipMultiplesOf4And6();

findFirstLongName(["John", "Alexandra", "Christopher", "Mary"]);
// Alexandra

printOddNumbers([1,2,3,4,5,6,7]);
// 1,3,5,7

sumPositiveEven([1,2,3,4,5,6,-2,8]);
// 20 (2+4+6+8)
