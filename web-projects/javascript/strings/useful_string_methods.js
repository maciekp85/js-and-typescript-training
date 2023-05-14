// Finding the length of a string
console.log("\n---Finding the length of a string---");
const browserType = "mozilla";
console.log("text: " + browserType);
console.log("Length: " + browserType.length);

// Retrieving a specific string character
console.log("\n---Retrieving a specific string character---");
firstCharacter = browserType[0];
console.log("First character: " + firstCharacter);
console.log("Last character: " + browserType[browserType.length - 1]);

// Testing if a string contains a substring
console.log("\n---Testing if a string contains a substring---");

console.log("includes() method");
if (browserType.includes("zilla")) {
    console.log("Found zilla");
} else {
    console.log("No zilla here!");
}

console.log("startsWith() method");
if (browserType.startsWith("zilla")) {
    console.log("Found zilla");
} else {
    console.log("No zilla here!");
}

console.log("endsWith() method");
if (browserType.endsWith("zilla")) {
    console.log("Found zilla");
} else {
    console.log("No zilla here!");
}
