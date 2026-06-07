// Objects
// Collection of key-value pairs
// Similar to arrays but more flexible
// Can store different data types
// Can have methods (functions as values)

// Objects can be declared in 4 ways
// 1. Object literal syntax
// 2. Object constructor syntax
// 3. Object.create() method
// 4. Class syntax

// 1. Object literal syntax
let person = {
  name: "John",
  age: 30,
  email: "john@goof.com",
  isLoggedIn: true,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001"
  },
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// 1.a Accessing object properties
// Dot notation and bracket notation
console.log("Accessing object properties using dot notation: person.name " , person.name);
console.log("Accessing object properties using bracket notation: person['age'] " , person["age"]);
// console.log(`Accessing object properties using bracket notation: person['email'] if the key is not treated as a string ReferenceError: email(key) is not defined is expected` , person[email]);

// if the key is defined as a string in the object, we can access it using bracket notation
// if the key is defined as a symbol in the object, we can access it using bracket notation

const symbolKey = Symbol("symbolKey");
const person1 = {
    "first name": "John",
    "last name": "Doe",
    "age": 30,
    [symbolKey]: "This is a symbol key"
};
console.log("Accessing object properties using bracket notation with a string key: person1['first name'] " , person1["first name"]);
console.log("Accessing object properties using bracket notation with a symbol key: person1[symbolKey] " , person1[symbolKey]);

// Modifying object properties
person.age = 31; // using dot notation
person1["email"] = "asd@gmail.com"; // using bracket notation
console.log("Modifying object properties: person.age = 31 and person['email'] = 'asd@gmail.com'", person.age, person.email);

// Adding new properties to an object
person.gender = "male"; // using dot notation
person["country"] = "USA"; // using bracket notation
console.log("Adding new properties to an object: person.gender = 'male' and person['country'] = 'USA'", person.gender, person.country);

// Deleting properties from an object
delete person.hobbies; // using dot notation
delete person1["age"]; // using bracket notation
console.log("Deleting properties from an object: delete person.hobbies and delete person['address']", person.hobbies, person1.age);

// Even functions can be properties of an object, and they are called methods. We can call the method using dot notation or bracket notation
person.greet();
console.log("Calling a method using dot notation: person.greet() " , person.greet());
console.log("Calling a method using bracket notation: person['greet']() " , person["greet"]()); 
console.log(person.greet, person["greet"], "Returns the function definition of the method, not the result of calling the method. To get the result of calling the method, we need to add parentheses () after the method name.");

// Even objects can be properties of an object, and they are called nested objects. We can access the properties of the nested object using dot notation or bracket notation
console.log("Accessing properties of a nested object using dot notation: person.address.street " , person.address.zipCode);

// 2. new Object() constructor syntax
let person2 = new Object();
person2.name = "Jane";
person2.age = 25;
person2.email = "jane@gmail.com";
console.log("Creating an object using new Object() constructor syntax: person2 " , person2);

// Merge objects
// We can merge two or more objects using the Object.assign() method or the spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log("Merging objects using Object.assign(): mergedObj " , mergedObj);
// Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object. 
// In the example above, we are creating a new empty object {} as the target object and copying the properties of obj1 and obj2 into it.
//  This way, we are not modifying the original objects obj1 and obj2. 
// If we had used Object.assign(obj1, obj2), it would have modified obj1 by adding the properties of obj2 to it, which is not what we want in this case.

// Using the spread operator
const mergedObj2 = { ...obj1, ...obj2 };
console.log("Merging objects using spread operator: mergedObj2 " , mergedObj2); 

// return keys and values of an object
console.log("Getting keys of an object using Object.keys(): Object.keys(mergedObj) " , Object.keys(person), typeof Object.keys(person));
console.log("Getting values of an object using Object.values(): Object.values(mergedObj) " , Object.values(person), typeof Object.values(person));
console.log("Getting entries of an object using Object.entries(): Object.entries(mergedObj) " , Object.entries(person), typeof Object.entries(person));

// check if a key exists in an object
console.log("Checking if a key exists in an object using the in operator: 'name' in person " , "name" in person);
console.log("Checking if a key exists in an object using the hasOwnProperty() method: person.hasOwnProperty('age') " , person.hasOwnProperty("age"));

// Object destructuring
// We can extract values from an object and assign them to variables using object destructuring
const { name, age } = person;
console.log("Object destructuring: const { name, age } = person " , name, age);

const { email: personEmail } = person;
console.log("Object destructuring with renaming: const { email: personEmail } = person " , personEmail);