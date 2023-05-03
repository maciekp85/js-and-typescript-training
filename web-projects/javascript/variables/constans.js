// let count;   // correct

// const count;    // error, const declaration must be initialized

// Reassigning variable, for let possible
// let count = 1;
// count = 2;

// Reassigning variable, for const throws error
// const count = 1;
// count = 2;  // throws TypeError: Assignment to constant variable.

// Note that although a constant in JavaScript must always name the same value, you can change the content of the value that it names.
// This isn't a useful distinction for simple types like numbers or booleans, but consider an object:
const bird = { species: 'Kestrel' };
console.log(bird.species);

bird.species = 'Striated Caracara';
console.log(bird.species);

// Use const when you can, and use let when you have to.
// This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.