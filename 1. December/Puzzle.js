const fs = require("fs");
fileContents = fs.readFileSync("1. December/PuzzleInput.txt", 'utf8').split("\n")

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

var calibrationValue = 0

for (let i = 0; i < digits.length; i++) {
    calibrationValue += parseInt(digits[i])
    
}

// Now you can use the variable 'fileContents' as needed
console.log('File contents:', digits);
console.log(calibrationValue);

function convertNumber(numberString) {
    if (!isNaN(numberString)) {
        return parseInt(numberString);
    } else {

        const numberDict = {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,

            "eno": 1,
            "owt": 2,
            "eerht": 3,
            "ruof": 4,
            "evif": 5,
            "xis": 6,
            "neves": 7,
            "thgie": 8,
            "enin": 9
        }

        return numberDict[numberString]
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Resultat del 1 = 53386
// Resultat del 2 = 53312