// 1-დან 100-ის ჩათვლით შემთხვევითი რიცხვის შექმნა
let randomNumber = Math.floor(Math.random() * 100) + 1;

// მომხმარებლის რიცხვის ჩაწერა prompt-ის საშუალებით
let userGuess = parseInt(prompt("შეიყვანე რიცხვი 1-დან 100-ის ჩათვლით:"));

if (userGuess > randomNumber) {
  alert("შენი რიცხვი მეტია!");
} else if (userGuess < randomNumber) {
  alert("შენი რიცხვი ნაკლებია!");
} else if (userGuess === randomNumber) {
  alert("გილოცავ! სწორად გამოიცანი 🎉");
} else {
  alert("გთხოვ შეიყვანო მხოლოდ რიცხვი!");
}
