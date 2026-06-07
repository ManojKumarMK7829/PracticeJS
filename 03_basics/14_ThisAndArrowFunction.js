const user = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
        console.log(this); // this refers to the user object because it is the object that is calling the greet function
    }
};

user.greet(); // Hello, my name is John and I am 30 years old.
console.log(this); 
// In the global scope, this refers to the global object (window in browsers), it returns window object in browsers. and {} object in node environment.
// this is not recommended to use in the global scope because it can lead to bugs and unexpected behavior.
// 'this' is determined by how a function is called, not where it is defined. In the global scope, 'this' refers to the global object (window in browsers). 
// In a function, 'this' refers to the object that is calling the function. In an arrow function, 'this' refers to the surrounding lexical context, which is the value of 'this' in the enclosing scope. 
// Arrow functions do not have their own 'this' value, so they inherit it from the parent scope.

function regularFunction() {
    let name = 'Regular Function';
    console.log(this); // In a regular function, 'this' refers to the global object (window in browsers), in node environment it returns {} object.
    console.log(this.name); // "this" can be used in object, so the name is undefined because it is not defined on the global object.
}

regularFunction(); // undefined

const arrowFunction = () => {
    let name = 'Arrow Function';
    console.log(name); // Arrow Function
    console.log(this);
}

arrowFunction();

// basic look of arrow function is () => {}. 
// It is a shorter syntax for writing functions and 
// it does not have its own 'this' value, so it inherits it from the parent scope.

const addition1 = (a, b) => a + b; // This is an arrow function that takes two parameters and returns their sum.
console.log(addition1(5, 10)); // 15


const addition2 = (a, b) => {
    return a + b; // This is an arrow function that takes two parameters and returns their sum. It uses a block body, so we need to use the return statement.
}
console.log(addition2(5, 10)); // 15

const addition3 = (a, b) => (a + b);
console.log(addition3(5, 10)); // 15
// In the above examples, addition1 and addition3 are using the concise body syntax, which allows us to omit the return statement and curly braces when the function body is a single expression.

const addition4 = a => a + 10; // This is an arrow function that takes one parameter and returns the sum of the parameter and 10. When there is only one parameter, we can omit the parentheses around the parameter.
console.log(addition4(5)); // 15


