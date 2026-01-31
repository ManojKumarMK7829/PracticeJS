const a = 12357
let b = "Manoj"
c = "mandya"
let d;

// a = 100

console.log(a);
console.log(b);

console.table([a, b, c, d]);

/**
 * Prefer not use var
 * because of issue in block scope and functional scope
 */

/* var issues in JS */

var x = 10;
var x = 20; // re-declaration is allowed with var
console.log(x); // Output: 20
console.log("x Allows re declaration and re assignment so avoid var and undefined types in your code");

console.log(y);
var y = 30; // variable hoisting with var, undefined is printed instead of error
console.log("y Allows hoisting so avoid var and undefined types in your code");

if (true) {
    var z = 40; // var is function-scoped, not block-scoped
}
console.log(z); // Output: 40
console.log("z is accessible outside the block");

/*  let declaration */
let a1 = 10;
// let a1 = 20; // Error: Cannot redeclare block-scoped variable 'a1'
//SyntaxError: Identifier 'a1' has already been declared
console.log(a1);
console.log("a1 Does not allow re declaration");

// console.log(d1); // Error: Cannot access 'd1' before initialization
// // ReferenceError: Cannot access 'd1' before initialization
// let d1 = 30;

let b1 = 30;
b1 = 40; // Allowed: re-assignment is allowed with let
console.log(b1);

if (true) {
    let c1 = 50;
}
// console.log(c1); // Error: 'c1' is not defined
// ReferenceError: c1 is not defined
console.log("c1 is not accessible outside the block");

/* const declaration */
const p = 100;
// p = 200; // Error: Assignment to constant variable.
// TypeError: Assignment to constant variable.
console.log(p);
console.log("p Does not allow re assignment");

/*  const with objects and arrays */
const obj = { name: "Manoj", age: 30 };
obj.age = 31; // Allowed: modifying properties of a const object
console.log(obj);
console.log("obj properties can be modified even if obj is declared with const");

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifying elements of a const array
console.log(arr);
console.log("arr elements can be modified even if arr is declared with const");
// arr = [5, 6, 7]; // Error: Assignment to constant variable.
// TypeError: Assignment to constant variable.  
console.log("arr Cannot be re assigned if declared with const");

/* Summary:
   - Use 'let' for variables that will change.
   - Use 'const' for variables that won't change.
   - Avoid 'var' due to its scoping issues.
   - For objects and arrays declared with 'const', you can modify their contents but cannot reassign them.
*/
