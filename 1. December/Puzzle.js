const fs = require("fs");

let fileContents = 1
fileContents = fs.readFileSync("1. December/PuzzleInput.txt", 'utf8').split("\n")

fileContents.forEach(element => {
    element.match("[0-9]")
});

// Now you can use the variable 'fileContents' as needed
console.log('File contents:', fileContents);

