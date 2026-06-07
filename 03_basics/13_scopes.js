// Scopes are curly braces used to group code together. They are used in functions, loops, and if statements. They create a new scope for variables declared with let and const.

if(true) {    
    let x = 10; // x is only accessible within this function scope
    const y = 20; // y is also only accessible within this function scope
    var z = 30; // z is function-scoped, but can be accessed outside of this block if declared with var
}


// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
console.log(z); // z shows value 30 because var is function-scoped,
//  but it is not recommended to use var due to its hoisting behavior and potential for bugs.

function one() {
    const name = "Alice"; // name is only accessible within this function scope
    function two() {
        const age = 25; // age is only accessible within this function scope
        console.log(name); // name is accessible here because of lexical scoping
    }
    two();
    // console.log(age); // ReferenceError: age is not defined
    console.log(name); // name is accessible here because it is declared in the outer function scope
}

one();