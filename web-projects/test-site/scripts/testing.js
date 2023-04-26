// Variables
console.log("\n--Variables--\n");

let myVariable = "Bob";
myVariable = "George";

console.log(myVariable);

let array = [1, "Maciek", true, 10];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

// Comments
// console.log("--Comments--");

/*
Everything in between is a comment
console.log(array[3]);
*/

// Operators
console.log("\n--Operators--\n");

let a = 1;
let b = 2;
console.log("a === b", a === b);
console.log("a !== 1", a !== 1);
console.log("!(a === 1)", !(a === 1));
let temp = '35' + '25';

// Concatenation
console.log("'35' + '25'", temp);

// Conditionals
console.log("\n--Conditionals--\n");

let iceCream = "chocolate";
if (iceCream == "chocolate") {
    console.log("Yay, I love chocolate ice cream!");
} else {
    console.log("Awww, but chocolate is my favorite...");
}

// Functions
console.log("\n--Functions--\n");

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

let num1 = 4;
let num2 = 7;
console.log(num1 + " * " + num2 + " = ", multiply(num1, num2));
console.log("20 * 20 = ", multiply(20, 20));
console.log("0.5 * 3 = ", multiply(0.5, 3));