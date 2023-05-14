
// Numbers vs. Strings
console.log("--Numbers vs. Strings");
const name = "Front";
const number = 242;
console.log(`${name}${number}`); // Front242

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);