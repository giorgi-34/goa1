<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Functions Combined</title>
</head>
<body>

  <button onclick="sayHello()">Say Hello</button>
  <button onclick="greetUser('Lasha')">Greet Lasha</button>
  <button onclick="showAddition()">Add 5 + 7</button>
  <button onclick="showMultiplication()">Multiply 4 by 10</button>
  <button onclick="changeText()">Change Paragraph Text</button>

  <p id="text">Original paragraph text.</p>

  <script>
    // 2) Alert function
    function sayHello() {
      alert("Hello, world!");
    }

    // 3) Function with parameter
    function greetUser(name) {
      console.log(`Hello, ${name}!`);
    }

    // 4) Function to add two numbers
    function addNumbers(a, b) {
      return a + b;
    }

    // 5) Multiply a number by 10
    function multiplyByTen(num) {
      return num * 10;
    }

    // Helper to display addition result
    function showAddition() {
      const result = addNumbers(5, 7);
      alert("5 + 7 = " + result);
    }

    // Helper to display multiplication result
    function showMultiplication() {
      const result = multiplyByTen(4);
      alert("4 x 10 = " + result);
    }

    // 9) Change paragraph text
    function changeText() {
      const para = document.getElementById("text");
      para.textContent = "Paragraph text has been changed!";
    }
  </script>

</body>
</html>
