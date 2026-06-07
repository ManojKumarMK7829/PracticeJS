(function abc() {
    console.log("IIFE stands for Immediately Invoked Function Expression");
    console.log("It is a function that is defined and immediately invoked");
    console.log("It is used to create a new scope and avoid polluting the global scope");
})();

// In the above code, we have defined a function named abc and immediately invoked it.
// The function is wrapped in parentheses to create a function expression, and then it is immediately invoked with the parentheses at the end.
// This is a common pattern in JavaScript to create a new scope and avoid polluting the global scope with variables and functions. 
// IIFEs are often used in JavaScript to create a private scope for variables and functions, and to avoid naming conflicts with other code.

(() => {
    console.log("This is an IIFE using arrow function syntax");
    console.log("It works the same way as a regular IIFE, but it uses arrow function syntax");
    console.log("Arrow functions do not have their own 'this' value, so they inherit it from the parent scope");
})();

((name) => {
    console.log(`Hello, ${name}!`);
})("Manoj");
// In the above code, we have defined an IIFE using arrow function syntax.
// The IIFE takes a parameter named name and immediately invokes it with the argument "Manoj".
// This will output "Hello, Manoj!" to the console. 
// IIFEs can also take parameters and be invoked with arguments, just like regular functions.

const res = (() => {
    return "This is the result of the IIFE";
})();
console.log(res); // This is the result of the IIFE
// In the above code, we have defined an IIFE that returns a string.
// The result of the IIFE is assigned to the variable res, which is then logged to the console. 
// This demonstrates how we can use IIFEs to create a new scope and return a value without polluting the global scope.

