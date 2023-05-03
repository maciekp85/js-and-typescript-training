// It's all numbers to me

const myInt = 5;
const myFloat = 6.667;
console.log("myInt = ", myInt);
console.log("myFloat = ", myFloat);

console.log("typeof myInt: ", typeof myInt);
console.log("typeof myFloat: ", typeof myFloat);

// Useful Number methods
const lotsOfDecimal = 1.766584958675746364;
console.log("lotsOfDecimal = ", lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log('lotsOfDecimal rounded to 2 decimal places = ', twoDecimalPlaces);

// Converting to number data types
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