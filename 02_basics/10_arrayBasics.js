// When dealing with multiple arrays
const myArr1 = [1, 2, 3];
const myArr2 = [4, 5, 6];

// myArr1.push(myArr2);
// console.log("Combining arrays using push: myArr1.push(myArr2) " , myArr1);
// console.log("Here myArr2 is added as a single element to myArr1, resulting in a nested array.");

// To combine arrays without nesting, we can use the concat method
const combinedArr1 = myArr1.concat(myArr2);
console.log("Combining arrays using concat: combinedArr1 = myArr1.concat(myArr2) " , combinedArr1);

// when there are more than two arrays to combine, using concat can be less efficient and less readable
// To combine multiple arrays without nesting, we can use the spread operator
const combinedArr = [...myArr1, ...myArr2];
console.log("Combining arrays using spread operator: combinedArr = [...myArr1, ...myArr2] " , combinedArr);

// flattening nested arrays
// If we have a nested array and we want to flatten it, we can use the flat method
// The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//  By default, the depth is 1 we can specify the depth upto infinity
const nestedArr = [1, 2, [3, 4], 5];
const flattenedArr = nestedArr.flat(Infinity);
console.log("Flattening nested arrays using flat method: flattenedArr = nestedArr.flat() " , flattenedArr);
  
// check its an array or not
// To check if a variable is an array, we can use the Array.isArray() method
const arr = [1, 2, 3];
console.log("Checking if it's an array using Array.isArray(): Array.isArray(arr) " , Array.isArray(arr));
console.log("Checking string is an array using Array.isArray(): Array.isArray('hello') " , Array.isArray("hello"));

// Array methods
// Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
const str = "hello";
const arrFromStr = Array.from(str);
console.log("Creating an array from a string using Array.from(): arrFromStr = Array.from(str) " , arrFromStr);

// Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
const arrOf = Array.of(1, 2, 3, true, "manu");
console.log("Creating an array using Array.of(): arrOf = Array.of(1, 2, 3, true, 'manu') " , arrOf);