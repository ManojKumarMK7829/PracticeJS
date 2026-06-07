const number = 100;
console.log(number, typeof number);
console.log(number.toString(), typeof number.toString(), number.toString().length);
// toString() method converts a number to a string.
// It returns the string representation of the number.

console.log(Number("123"), typeof Number("123"));
// Number() function converts a string to a number.
// It returns the number representation of the string.

console.log(number.toFixed(2), typeof number.toFixed(2), number.toFixed(2).length);
// toFixed() method formats a number using fixed-point notation.
// It returns a string representation of the number with a specified number of digits after the decimal point.

let num1 = 123.9333;
console.log(num1.toPrecision(3), typeof num1.toPrecision(3), num1.toPrecision(3).length);
// toPrecision() method formats a number to a specified length.
// It returns a string representation of the number with a specified length.
num1 = 11124.9333;
console.log(num1.toPrecision(3), typeof num1.toPrecision(3), num1.toPrecision(3).length);
// toPrecision() method formats a number to a specified length.
// It returns a string representation of the number with a specified length.
// When the number is too large, it returns the number in exponential notation.

let num2 = 1000000;
console.log(num2.toLocaleString(), typeof num2.toLocaleString(), num2.toLocaleString().length);
// toLocaleString() method returns a string with a language-sensitive representation of the number.
// It returns a string representation of the number in a locale-specific format.

/*  Math  */

console.log(Math.PI, typeof Math.PI);
// Its Constatnt property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.
// Math.PI is a property of the Math object that represents the ratio of the circumference of a circle to its diameter.

console.log(Math.E, typeof Math.E);
// Its Constatnt property represents Euler's number, the base of natural logarithms, approximately 2.718.
// Math.E is a property of the Math object that represents Euler's number, the base of natural logarithms.

console.log(Math.sqrt(16), typeof Math.sqrt(16));
// sqrt() method returns the square root of a number.
// It returns the square root of the number.

console.log(Math.pow(2, 3), typeof Math.pow(2, 3));
// pow() method returns the base to the exponent power, that is, base^exponent.
// It returns the base to the exponent power.

let val1 = 123;
console.log(Math.abs(val1), typeof Math.abs(val1));
// abs() method returns the absolute value of a number.
// It returns the absolute value of the number.
// abs() converts negative numbers to positive numbers and leaves positive numbers unchanged.

let val2 = -123;
console.log(Math.abs(val2), typeof Math.abs(val2));
// abs() method returns the absolute value of a number.
// It returns the absolute value of the number.
// abs() converts negative numbers to positive numbers and leaves positive numbers unchanged.

let val3 = -123.345;
console.log(Math.round(val3), typeof Math.round(val3));
// round() method returns the value of a number rounded to the nearest integer.
// It returns the value of a number rounded to the nearest integer.
// val -123.345 is rounded to -123.
// val 123.345 is rounded to 123.
// val 123.5 is rounded to 124.
// val 123.6 is rounded to 124.

let val4 = 123.345;
console.log(Math.ceil(val4), typeof Math.ceil(val4));
// ceil() method returns the smallest integer greater than or equal to a given number.
// It returns the smallest integer greater than or equal to the number.
// val 123.345 is rounded up to 124.
// val 123.0001 is rounded up to 124.

let val5 = 123.345;
console.log(Math.floor(val5), typeof Math.floor(val5));
// floor() method returns the largest integer less than or equal to a given number.

// Random number between 0 and 1
console.log(Math.random(), typeof Math.random());
// random() method returns a random number between 0 (inclusive) and 1 (exclusive).

// Random number between 0 and 100
console.log(Math.random() * 100, typeof Math.random() * 100);
// random() method returns a random number between 0 (inclusive) and 1 (exclusive).
// To get a random number between 0 and 100, we can multiply the result of Math.random() by 100.

// Random integer between 10 and 20
console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10, typeof Math.floor(Math.random() * (20 - 10 + 1)) + 10);
// This will return a random integer between 10 and 20 (inclusive).
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
