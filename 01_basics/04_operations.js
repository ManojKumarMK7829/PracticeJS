/**
 *  JavaScript has several categories of operators:
 *  1. Arithmetic Operators -   (+, -, *, /, %, **, ++, --)
 *  2. Assignment operator -    (=, +=, -=, *=, /=)
 *  3. Relational operator -    (==(check value only), ===(value + type), !=, !==, <, >, <=, >=)
 *  4. Bitwise operator     -   ()
 */


/** ------------Arithmatic operator----------- */
console.log(1+ 2);
console.log(2-1);
console.log(51-2);
console.log(8/2);
console.log(5%2);
console.log(2**3);

/**-------------Assignment operator-------------- */
let a = 15;

a += 2;
console.log(a);

a -= 2;
console.log(a);

a *= 2;
console.log(a);

a /= 3;
console.log(a);

a %= 4;
console.log(a);

/**---------------Relational Operator------------- */

console.log(5 == "5"); // true - (check value only)
console.log(5 === "5");// false - (check value + type)
console.log("5" === "5");// true - (check value + type)

console.log("5" != "5"); //false - (check values)
console.log("5" !== "5");  //false - (check values + type)