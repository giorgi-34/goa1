// 17) Sum of item prices
let price1 = prompt("Enter first item price (e.g., '19.99'):");
let price2 = prompt("Enter second item price (e.g., '5.50'):");
let totalPrice = parseFloat(price1) + parseFloat(price2);
console.log("Total price:", totalPrice);

// 18) Bill and tip
let bill = prompt("Enter bill amount (e.g., '45.75'):");
let tipPercent = prompt("Enter tip percentage (e.g., '15'):");
let billNum = parseFloat(bill);
let tip = billNum * (parseFloat(tipPercent) / 100);
let totalWithTip = billNum + tip;
console.log("Bill:", billNum);
console.log("Tip:", tip);
console.log("Total with tip:", totalWithTip);

// 19) Celsius to Fahrenheit
let celsius = prompt("Enter temperature in Celsius (e.g., '36.6'):");
let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

// 20) BMI calculation
let weight = prompt("Enter your weight in kg (e.g., '70.5'):");
let height = prompt("Enter your height in meters (e.g., '1.75'):");
let bmi = parseFloat(weight) / (parseFloat(height) ** 2);
console.log("Weight:", weight);
console.log("Height:", height);
console.log("BMI:", bmi);

// 21) Fuel efficiency
let distance = prompt("Enter distance traveled in km (e.g., '350.7'):");
let fuel = prompt("Enter fuel used in liters (e.g., '28.5'):");
let efficiency = parseFloat(distance) / parseFloat(fuel);
console.log("Distance:", distance);
console.log("Fuel used:", fuel);
console.log("Km per liter:", efficiency);
