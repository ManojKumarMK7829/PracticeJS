/**
 * For documentation mdn
 * ECMA script - tc39
 */

/**
 * JavaScript has 8 data types (7 primitive + 1 non-primitive).
 * 
 * Primitive -> number, bigInt, String, Boolean, Undefined, null, Symbol
 * Non Primitive -> Object, Array, Function, RegExp etc
 */

/**
 * alert(3+3) this will not work because we are using node not browser
 */

/* number */
let age = 28
let marks = 85.36

console.log([age, marks]);
console.log(typeof marks);
console.log(typeof age);

/**Big int - even big int is a number*/
let bigNum = 545498465486465468484654465484684644848646446846844486489498468484988745745487487
console.log(bigNum);
console.log(typeof bigNum); 

/** String  */
let str = "Manoj"
console.log(str);
console.log(typeof str);

/**Boolean true or false */
let value  = true;
let value1 = false;

console.log(typeof value);
console.log(typeof value1);

/**Undefined */
let v;
console.log(v);
console.log(typeof v);

/** null */
/** null is a primitive value, means variable is filled with a value
 * undefined means yet to be filled
 * null is primitive value but its type is object, non primitive
 * this is a bug continued to keep backward compatibility
 */
let n = null;
console.log(n);
console.log(typeof n);

/** object */
let person = {
    name : "manoj",
    age : 29
};

console.log(person);
console.log(typeof person);


/* String is primitive, but js refer to wrapper object for string methods */
let str1 = "Hello, World!".toUpperCase();
console.log(str1 + " " + typeof str1);
