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

// Finding the position of a substring in a string
console.log("\n---Finding the position of a substring in a string---");
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));  // 20
console.log(tagline.indexOf("x"));  // -1

const firstOccurrence = tagline.indexOf("developers");
const secondOccurence = tagline.indexOf("developers", firstOccurrence + 1);

console.log("First occurence index: ", firstOccurrence); // 20
console.log("Second occurence index: ", secondOccurence); // 35 Here we're telling the method to search for the substring "developers" starting at index 21 (firstOccurrence + 1), and it returns the index 35.
