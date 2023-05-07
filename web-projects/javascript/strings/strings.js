// Creating a string
console.log("\n---Creating a string---");
const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

// Single quotes vs. double quotes
console.log("\n---Single quotes vs. double quotes---");
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

// There is very little difference between the two, and which you use is down to personal preference. You should choose one and stick to it.

//  Both of these are okay:
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

// However, you can't include the same quote mark inside the string if it's being used to contain them.
// The following will error, as it confuses the browser as to where the string ends:
// const bigmouth = 'I've got no right to take my place…';

// Escaping characters in a string
console.log("\n---Escaping characters in a string---");
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const greetings = "Hello \"World\"!";
console.log(greetings);

// Concatenating strings
console.log("--Concatenating strings--");
// To concatenate string you can use a different type of string called a template literal.
// A template literal looks just like a normal string, but instead of using single or double quote marks(' or "), you use backtick characters (`):
const greeting = `Hello`;

const name = "Chris";
const greeting2 = `Hello, ${name}`;
console.log(greeting2);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);