// 12. Convert a number to a string using String()
let num = 123;
let numToStr = String(num);
console.log("12. რიცხვის გადაქცევა ტექსტად:", numToStr, typeof numToStr); // "123", string

// 13. Convert a boolean value to a string using String()
let boolVal = true;
let boolToStr = String(boolVal);
console.log("13. ლოგიკური მნიშვნელობის გადაქცევა ტექსტად:", boolToStr, typeof boolToStr); // "true", string

// 14. Convert a string containing a number to a number using Number()
let strNum = "456";
let strToNum = Number(strNum);
console.log("14. ტექსტის გადაქცევა რიცხად:", strToNum, typeof strToNum); // 456, number

// 15. Use Number() to convert a boolean to a number
let boolVal2 = false;
let boolToNum = Number(boolVal2);
console.log("15. ლოგიკური მნიშვნელობის გადაქცევა რიცხად:", boolToNum, typeof boolToNum); // 0, number

// 16. Check what happens when you use Number() on a non-numeric string
let nonNumStr = "hello";
let result = Number(nonNumStr);
console.log("16. რიცხვში გარდაქმნის მცდელობა არარიცხულ ტექსტზე:", result, typeof result); // NaN, number
