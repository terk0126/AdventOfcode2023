const fs = require("fs");
fileContents = fs.readFileSync("2. December/PuzzleInput.txt", 'utf8').split("\n")

console.log(fileContents);

const digits = [];

fileContents.forEach(element => {
    var temp = (
        String(convertNumber(element.match(/one|two|three|four|five|six|seven|eight|nine|[0-9]/))) +
        String(convertNumber(reverseString(element).match(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|[0-9]/) ))

        //String(convertNumber(element.match(/[0-9]/))) +
        //String(convertNumber(reverseString(element).match(/[0-9]/)))
    )

    digits.push(temp)
});