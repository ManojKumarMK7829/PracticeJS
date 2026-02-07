/**
 * Conversion
 */

// Conver other to number

let percentage = 35

console.log(percentage);
console.log(typeof percentage);
console.log(typeof(percentage));

let percentage1 = "35"
let percentString = Number(percentage1)
console.log(percentString);
console.log(typeof percentString);
console.log(typeof(percentString));

let percentage2 = "35a"
let percentString1 = Number(percentage2)
console.log(percentString1);
console.log(typeof percentString1);

/**
 * let percentage1 = "35" -> 
 * If string carrying number is clean it can easily converted to number
 * 
 * let percentage2 = "35a"
 * If string carrying some caharacter along 
 * the output will be "NaN" - Not a Number
 * It will get converted to number but based on output need to be decided 
 */

let isF = false 
let numOfIsF = Number(isF)
let isT = true
let numOfIsT = Number(isT)
console.log(numOfIsF);
console.log(typeof numOfIsF);
console.log(numOfIsT);
console.log(typeof numOfIsT);

/**
 * let isF = false & let isT = true
 * if boolean is converted to number only 0 & 1 can be seen
 */

let undfnd;
let numOfUndfnd = Number(undfnd)

console.log(numOfUndfnd);
console.log(typeof numOfUndfnd);

/**
 *  let undfnd; 
 *  if we are converting undefined variable to number. it will get converted.
 *  the type will be number but the value will be "NaN" - Not a Number
 */

let nullV = null
let numOfNull = Number(nullV)

console.log("The value of numOfNull  " + numOfNull);
console.log(typeof numOfNull);

/**
 *  let nullV = null 
 *  if we are converting the null value to number
 *  it get converted to number and number is 0
 */

/** Convert other to string */
let numVal = 25.33
let strNumValue = String(numVal)
console.log("The strNumValue is "+strNumValue + " type of strNumValue " + typeof strNumValue);

let bool = true
let strBool = String(bool)
console.log("The strBool is " + strBool + " type of strBool is " + typeof strBool);

let strUndfd = String(undfnd)
console.log("The value of undefined is " + strUndfd + " type of undefined is " + strUndfd);

let strNull = String(nullV)
console.log("The strNull is " + strNull + " type is " +  typeof strNull);
/**
 * Calling String(value) only converts the value, NOT the variable.
 * If you don’t reassign, the variable keeps its original type.
 * means i need to undfnd = String(undfnd) then type will get modified to string
 * 
 * this is same with null also
 * 
 */

/** Boolean */

let a;
let boolValue = Boolean(a)
console.log("The boolValue is " + boolValue + " type of boolValue is " + typeof boolValue);
/**
 * when 
 * let a = 0; let boolValue = Boolean(a); 
 * The boolValue is false type of boolValue is boolean
 * when a = 0.00 - The boolValue is false type of boolValue is boolean
 * 
 * when a =1 then - The boolValue is true type of boolValue is boolean
 * when a = 1.11 - The boolValue is true type of boolValue is boolean
 * when a = 100 - The boolValue is true type of boolValue is boolean
 * 
 * let a = "true" - The boolValue is true type of boolValue is boolean
 * let a = "manoj" - The boolValue is true type of boolValue is boolean
 * let a = "false" - The boolValue is true type of boolValue is boolean
 * 
 * let a = "" - The boolValue is false type of boolValue is boolean
 * let a = null - null has value 0 - The boolValue is false type of boolValue is boolean
 * 
 *  7 falsy values - false, 0, "", NaN, null, undefined, 0n always return false 
 */