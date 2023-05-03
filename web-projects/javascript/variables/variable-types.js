// Variable types

// Numbers
let myAge = 17;

// Strings
let dolphinGoodbye = 'So long and thanks for all the fish';

// Booleans
let iAmAlive = true;
let test = 6 < 3;

// Arrays
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

myNameArray[0]; // should return 'Chris'
console.log('First element from array: ', myNameArray[0]);
myNumberArray[2]; // should return 40
console.log('Second element from array: ', myNameArray[2]);

// Objects
let dog = { name: 'Spot', breed: 'Dalmation' };

console.log('Dog name: ', dog.name);

// Dynamic typing
let myString = 'Hello';

let myNumber = '500';   // oops, this is still a string
console.log('typeof myNumber: ', typeof myNumber);
myNumber = 500; // much better - now this is a number
console.log('typeof myNumber: ', typeof myNumber);