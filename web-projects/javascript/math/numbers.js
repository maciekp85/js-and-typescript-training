// It's all numbers to me
console.log("---It's all numbers to me---");
const myInt = 5;
const myFloat = 6.667;
console.log("myInt = ", myInt);
console.log("myFloat = ", myFloat);

console.log("typeof myInt: ", typeof myInt);
console.log("typeof myFloat: ", typeof myFloat);

// Useful Number methods
console.log("\n---Useful Number methods---");
const lotsOfDecimal = 1.766584958675746364;
console.log("lotsOfDecimal = ", lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log('lotsOfDecimal rounded to 2 decimal places = ', twoDecimalPlaces);

// Converting to number data types
console.log("\n---Converting to number data types---");
let myNumber = "74";
console.log("\nmyNumber = ", myNumber);
myNumber += 3;
console.log("myNumber + 3 = ", myNumber);
console.log("typeof myNumber: ", typeof myNumber);

let myNumber2 = "74";
console.log("\nmyNumber2  = ", myNumber2);
myNumber2 = Number(myNumber2) + 3;
console.log("myNumber2 + 3 = ", myNumber2);
console.log("typeof myNumber2: ", typeof myNumber2);

// Arithmetic operators
console.log("\n---Arithmetic operators---");
const num1 = 10;
const num2 = 50;
console.log("num1 = ", num1);
console.log("num2 = ", num2);
console.log("9 *  num1 = ", 9 * num1);
console.log("num1 ** 3 = ", num1 ** 3);
console.log("num2 / num1 = ", num2 / num1);

console.log("5 + 10 * 3 = ", 5 + 10 * 3);
console.log("(num2 % 9) * num1 = ", (num2 % 9) * num1);

// Operator precedense
console.log("\n---Operator precedense---");
console.log("num2 + num1 / 8 + 2 =", num2 + num1 / 8 + 2);
console.log("(num2 + num1) / (8 + 2) =", (num2 + num1) / (8 + 2));

// Increment and decrement
console.log("\n--Increment and decrement--");
let number1 = 4;
console.log("number1 = " + number1);
// number1++;
console.log("number1++ = " + number1++);    // = 4, this is because the console returns the current value, then increments the variable
console.log("number1 = " + number1);    // = 5 after incrementation

let number2 = 6;
console.log("number2 = " + number2);
console.log("number2-- = " + number2--); // = 6, this is because the console returns the current value, then decrements the variable
console.log("number2 = " + number2);    // = 5 after decrementation

let number3 = 4;
console.log("number3 = " + number3);
console.log("++number3 = " + ++number3);    // = 5, this is because the console increments the variable and then returns the current value
console.log("number3 = " + number3);    // = 5 after incrementation

let number4 = 6;
console.log("number4 = " + number4);
console.log("--number4 = " + --number4); // = 6, this is because the console decrements the variable and then returns the current value
console.log("number4 = " + number4);    // = 6 after decrementation

// Assignment operators
console.log("\n--Assignment operators--");
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
console.log("x = ", x);
console.log("y = ", y);

console.log("x += 4", x += 4);
console.log("x -= 3", x -= 3);
console.log("x *= 3", x *= 3);
console.log("x /= 5", x /= 5);

x = 3; // x contains the value 3
y = 4; // y contains the value 4
console.log("x = ", x);
console.log("y = ", y);
x *= y; // x now contains the value 12
console.log("x *= y; x =", x);
console.log("x *= y; y =", y);
