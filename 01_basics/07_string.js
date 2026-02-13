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
