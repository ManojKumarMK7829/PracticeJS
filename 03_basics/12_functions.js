// Functions are the heart of JS
// A block that contains lines of code where we can call wherever and whenever required
// This helps avoiding reducing redundant code

function demoFunc() {
    console.log("Demo Function is called");
}

demoFunc();

// Functions with arguments

function welcomingGreet(name) {
    console.log(`${name} welcome to JS`);
}

function welcomingGreet1(name = "Guest") {
    console.log(`${name} welcome to JS`)
}
welcomingGreet("Manoj");
welcomingGreet1();
// If we do not pass any argument to the function, it will be undefined. To avoid this, we can set a default value for the parameter in the function definition. 
// In the above example, if we do not pass any argument to the welcomingGreet1 function, it will use the default value "Guest" and print "Guest welcome to JS".

// Functions with return type

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(2, 3) + " Result of the number");

