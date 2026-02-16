const firstName = "John";
const lastName = "Doe";

console.log(`My name is ${firstName} ${lastName}.`); // My name is John Doe.
console.log("Ways of storing strings:");
console.log("1. Using single quotes: 'Hello, World!'");
console.log('2. Using double quotes: "Hello, World!"');
console.log("3. Using backticks (template literals): `Hello, World!`");

let name = "Alice";
let newName = new String("Alice");
console.log(name == newName); // true
console.log("true - because JavaScript converts the String object to a primitive string for comparison");
console.log(name === newName); // false
console.log("false - because Value + Type are not the same, name is a primitive string and newName is an object");

let fName = new String("Alice");
let lName = new String("Alice");
console.log(fName == lName); // false
console.log("Its like comparing Object name === Object newName, they are different objects in memory, even though they contain the same string value.");
console.log(fName === lName); // false
console.log("false - because they are of different types (string vs object) they are not stored in the same way in memory");


// String methods
let str = "Hello, World!";
console.log(str.length + " - Length of the string");

//Ways to access characters in a string
console.log(str[0] + " - Accessing first character using bracket notation");
console.log(str.charAt(0) + " - Accessing first character using charAt() method");
console.log(str.charAt(100) + " - Accessing out of bounds index using charAt() method returns an empty string");
console.log(str[100] + " - Accessing out of bounds index using bracket notation returns undefined");

// Concatenation
let greeting = "Hello";
let name2 = "Alice";
console.log(greeting + ", " + name2 + "!" + " - Concatenating strings using + operator");
console.log(greeting.concat(", ", name2, "!") + " - Concatenating strings using concat() method");
console.log(`${greeting}, ${name2}!` + " - Concatenating strings using template literals");

// Extracting substrings
let substring1 = str.substring(0, 5);
console.log(substring1 + " - Extracting substring using substring() method");

let substring11 = str.substring(5, 0);
console.log(substring11 + " - substring() method swaps indices if start is greater than end");

let substring12 = str.substring(0, 100);
console.log(substring12 + " - substring() method returns up to the end of the string if end index is out of bounds");

let substring13 = str.substring(-5, 5);
console.log(substring13 + " - substring() method treats negative indices as 0, it reads from index 0 to 5 ie, left to right");

let substring14 = str.substring(5, -5);
console.log(substring14 + " - substring() method treats negative indices as 0, it reads from index 0 to 5 ie, left to right");

let substring15 = str.substring(-5, -1);
console.log(substring15 + " - substring() method treats negative indices as 0, it reads from index 0 to 0 ie, empty string");

let substring16 = str.substring(5, 5);
console.log(substring16 + " - substring() method returns an empty string if start and end indices are the same");

let substring17 = str.substring(5);
console.log(substring17 + " - substring() method returns the rest of the string if end index is omitted");

// slice() method
let substring2 = str.slice(0, 5);
console.log(substring2 + " - Extracting substring using slice() method");

let substring21 = str.slice(5, 0);
console.log(substring21 + " - slice() method does not swap indices, it returns an empty string if start is greater than end");

let substring22 = str.slice(0, 100);
console.log(substring22 + " - slice() method returns up to the end of the string if end index is out of bounds");

let substring23 = str.slice(5);
console.log(substring23 + " - slice() method returns the rest of the string if end index is omitted");

let substring24 = str.slice(-1, -5);
console.log(substring24 + " - slice() method returns an empty string if start index is greater than end index, even if negative indices are used");

let substring25 = str.slice(-5, -1);
console.log(substring25 + " - slice() method correctly handles negative indices, it reads from the end of the string, so it returns 'orld'");

let substring26 = str.slice(-5);
console.log(substring26 + " - slice() method returns the last 5 characters of the string when only a negative start index is provided");

// toUpperCase and toLowerCase
let emp_name = "Alice";
console.log(emp_name.toUpperCase() + " - Converting string to uppercase using toUpperCase() method");
console.log(emp_name.toLowerCase() + " - Converting string to lowercase using toLowerCase() method");

// trim() method
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim() + " - Removing whitespace from both ends of the string using trim() method");

// includes() method
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox") + " - Checking if the string includes 'fox' using includes() method");
console.log(sentence.includes("cat") + " - Checking if the string includes 'cat' using includes() method");

// repeat() method
let repeatStr = "Hello! ";
console.log(repeatStr.repeat(3) + " - Repeating the string 3 times using repeat() method");

// replace() method
let originalStr = "The quick brown fox jumps over the lazy dog.";
let replacedStr = originalStr.replace("fox", "cat");
console.log(replacedStr + " - Replacing 'fox' with 'cat' using replace() method");

// replaceAll() method
let replacedAllStr = originalStr.replaceAll("o", "0");
console.log(replacedAllStr + " - Replacing all occurrences of 'o' with '0' using replaceAll() method");

// split() method
let csv = "John,Doe,30,Engineer";
let csvArray = csv.split(",");
console.log(csvArray + " - Splitting the string into an array using split() method");
let sentenceArray = sentence.split("");
console.log(sentenceArray + " - Splitting the string into an array of characters using split('') method");
let limitedSplit = sentence.split(" ", 4);
console.log(limitedSplit + " - Splitting the string into an array with a limit using split() method " + typeof limitedSplit);
console.log(limitedSplit[1] + " - Accessing first element of the split array");

// indexOf() and lastIndexOf() methods
let index = sentence.indexOf("fox");
console.log(index + " - Finding the index of 'fox' using indexOf() method");
let lastIndex = sentence.lastIndexOf("the");
console.log(lastIndex + " - Finding the last index of 'the' using lastIndexOf() method");

// startsWith() and endsWith() methods
console.log(sentence.startsWith("The quick") + " - Checking if the string starts with 'The quick' using startsWith() method");
console.log(sentence.endsWith("dog.") + " - Checking if the string ends with 'dog.' using endsWith() method");

// join() method
let words = ["Hello", "World", "from", "JavaScript"];
let joinedStr = words.join(" ");
console.log(joinedStr + " - Joining an array of strings into a single string using join() method");