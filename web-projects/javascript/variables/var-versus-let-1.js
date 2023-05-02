myName = 'Chris';

function logName() {
    console.log(myName);
}

logName();

var myName; // This won't work when typing individual lines into a JavaScript console, just when running multiple lines of JavaScript in a web document. This works because of hoisting

// If we changed var to let in the example, it would fail with an error.
// let myName;