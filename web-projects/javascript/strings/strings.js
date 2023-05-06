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