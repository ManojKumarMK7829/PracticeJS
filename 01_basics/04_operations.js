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

/**---------------Comparison Operator------------- */

console.log((5 == "5") + "  ---- 5 == '5'"); // true - (check value only)
console.log((5 === "5") + "  ---- 5 === '5'");// false - (check value + type)
console.log(("5" === "5") + "  ---- '5' === '5'");// true - (check value + type)

console.log(("5" != "5") + "  ---- '5' != '5'"); //false - (check values)
console.log(("5" !== "5") + "  ---- '5' !== '5'");  //false - (check values + type)
console.log((5 > "5") + "  ---- 5 > '5'"); // false - (check values)
console.log((5 >= "5") + "  ---- 5 >= '5'"); // true - (check values)
console.log((5 < "5") + "  ---- 5 < '5'"); // false - (check values)
console.log((5 <= "5") + "  ---- 5 <= '5'"); // true - (check values)   

/*--------Logical Operator -------------- */
// AND Operator - &&
console.log((5 > 3 && 2 < 4) + "  ---- 5 > 3 && 2 < 4");
console.log((5 > 3 && 2 > 4) + "  ---- 5 > 3 && 2 > 4");

// OR Operator - ||
console.log((5 > 3 || 2 > 4) + "  ---- 5 > 3 || 2 > 4");
console.log((5 < 3 || 2 > 4) + "  ---- 5 < 3 || 2 > 4");

// NOT Operator - !
console.log((!(5 > 3)) + "  ---- !(5 > 3)");
console.log((!(5 < 3)) + "  ---- !(5 < 3)");

/**----------------- Special Operator------------------ */
console.log(("5" + 5) + "  ---- '5' + 5 (string concatenation)"); // 55 - string concatenation
console.log(("5" - 5) + "  ---- '5' - 5 (number subtraction,  because forced conversion happens other than + operator)"); // 0 - number subtraction
console.log(("5" * 5) + "  ---- '5' * 5 (number multiplication, because forced conversion happens other than + operator)"); // 25 - number multiplication
console.log(("5" / 5) + "  ---- '5' / 5 (number division, because forced conversion happens other than + operator)"); // 1 - number division    

console.log(5,"5"); // 5, '5' - multiple args sent to console.log() are printed with space in between

/**-----------------Ternary Operator------------------ */

let age = 18;
let isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult);

/**-----------------Nullish Coaleshing Operations------------------ */

let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: "Default Value"
console.log("if userInput is null or undefined then it will return defaultValue otherwise it will return userInput");

/**-----------------Optional Chaining Operations------------------ */
let user = {
    name: "John",
    address: { city : "New York" }
};

console.log(user.address?.city); // Output: "New York"
console.log(user.contact?.phone); // Output: undefined (instead of throwing an error)
console.log("if address is present then it will return city otherwise it will return undefined without throwing error");

/**-----------------Spread & Rest Operations------------------ */
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
console.log("Spread operator is used to expand elements of an array or object into individual elements.");

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log("Rest operator is used to collect multiple elements into an array.");

/**-----------------In Operations------------------ */
let obj = { name: "Alice", age: 30 };
console.log("name" in obj); // Output: true
console.log("In verifies the key exist within the object or not, it will return true if key exist otherwise false");