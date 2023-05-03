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

// Arithemtic operators
console.log("\n---Arithemtic operators---");
const num1 = 10;
const num2 = 50;
console.log("num1 = ", num1);
console.log("num2 = ", num2);
console.log("9 *  num1 = ", 9 * num1);
console.log("num1 ** 3 = ", num1 ** 3);
console.log("num2 / num1 = ", num2 / num1);

console.log("5 + 10 * 3 = ", 5 + 10 * 3);
console.log("(num2 % 9) * num1 = ", (num2 % 9) * num1);
console.log("num2 + num1 / 8 + 2 =", num2 + num1 / 8 + 2);
