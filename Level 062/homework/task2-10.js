// 2) Get the HTML element with the ID header and store it in a variable.
const header = document.getElementById("header");

// 3) Use getElementById to find the element with the ID description.
const description = document.getElementById("description");

// 4) Retrieve the element with the ID footer and assign it to a variable named footerElement.
const footerElement = document.getElementById("footer");

// 5) Get the text content of the element with the ID title and store it in a variable.
const titleText = document.getElementById("title").textContent;

// 6) Change the text content of the element with the ID greeting to say "Welcome!".
document.getElementById("greeting").textContent = "Welcome!";

// 7) Set the text content of the element with the ID note to be empty.
document.getElementById("note").textContent = "";

// 8) Change the text color of the element with the ID heading to red.
document.getElementById("heading").style.color = "red";

// 9) Set the background color of the element with the ID box to yellow.
document.getElementById("box").style.backgroundColor = "yellow";

// 10) Make the font size of the element with the ID paragraph equal to 20px.
document.getElementById("paragraph").style.fontSize = "20px";
