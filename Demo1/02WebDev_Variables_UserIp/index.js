
document.getElementById("header").innerText = "Welcome to JavaScript";
document.getElementById("para").innerText = "This is a paragraph.";
document.getElementById("para").className = "para";

// There are 2 ways to accept user input in JavaScript
// 1. prompt() method
// 2. HTML form elements

// 1. prompt() method
let userInput = prompt("Please enter your name:");
console.log("User Input:", userInput);
document.getElementById("header").innerText = "Welcome, " + userInput + "! to learn JavaScript";

// 2. HTML form elements
document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("username").value;
    console.log("User Name:", name);
    document.getElementById("header").innerText = "Welcome, " + name + "! to learn JavaScript";
});