const arr1 = [0,1,2,true,"manu"];
const arr2 = new Array(0,1,2,true,"manu");

// Array methods
// Accessing the array elements

const arr3 = [0,1,2,true,"manu"];
console.log("Accessing array elements via index: arr3[3] " , arr3[3]);

// Length of the array
console.log("Length of the array: arr3.length " , arr3.length);

// Adding elements to the array
// push method adds elements to the end of the array and returns the new length of the array
arr3[5] = "new element";
arr3.push("another new element");
console.log("Array after adding element: arr3[5] " , arr3);
console.log("Array after adding element using push: arr3.push() " , arr3);

// Removing the last elements from the array
// pop method removes the last element from the array and returns that element
arr3.pop();
console.log("Array after removing last element: arr3.pop() " , arr3);

// Adding elements to the beginning of the array
// unshift method adds elements to the beginning of the array and returns the new length of the array
arr3.unshift("new element at start");
console.log("Array after adding element at start: arr3.unshift() " , arr3);

// Removing the first element from the array
// shift method removes the first element from the array and returns that element
arr3.shift();
console.log("Array after removing first element: arr3.shift() " , arr3);

// Checking if an element exists in the array and returning a boolean value
const myArr4 = ["apple", "banana", "cherry"];
console.log("Checking if 'apple' exists in the array: myArr4.includes('apple') " , myArr4.includes("apple"));

// Finding the index of an element in the array
console.log("Finding the index of 'banana' in the array: myArr4.indexOf('banana') " , myArr4.indexOf("banana"));
console.log("Finding the index of 'grape' in the array: myArr4.indexOf('grape') " , myArr4.indexOf("grape"));
console.log("If element is not found, indexOf returns: myArr4.indexOf('grape') " , myArr4.indexOf("grape"));

// joining array elements into a string
let arrayWord = myArr4.join(", ");
console.log("Joining array elements into a string: myArr4.join(', ') " , arrayWord, typeof arrayWord);

