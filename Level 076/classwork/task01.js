function sumEvenNumbers(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      sum += input[i];
    }
  }
  return sum;
}

// ტესტის მაგალითები:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // შედეგი: 12
console.log(sumEvenNumbers([2, 2, 2, 2]));       // შედეგი: 8
console.log(sumEvenNumbers([1, 3, 5]));          // შედეგი: 0
