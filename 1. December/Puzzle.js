const fs = require("fs");

let fileContents = 1
fileContents = fs.readFileSync("1. December/PuzzleInput.txt", 'utf8').split("\r\n")

const test = [];

console.log(fileContents[0].match(/one|two|three|four|five|six|seven|eight|nine|[0-9](?=([^0-9])*$)(?=([^one])*$)(?=([^two])*$)(?=([^three])*$)(?=([^four])*$)(?=([^five])*$)(?=([^six])*$)(?=([^seven])*$)(?=([^eight])*$)(?=([^nine])*$)/));


fileContents.forEach(element => {
    var temp = (
        //convertNumber(element.match(/one|two|three|four|five|six|seven|eight|nine|[0-9](?=([^0-9])*$)(?=([^one])*$)(?=([^two])*$)(?=([^three])*$)(?=([^four])*$)(?=([^five])*$)(?=([^six])*$)(?=([^seven])*$)(?=([^eight])*$)(?=([^nine])*$)/)[0])
        convertNumber(element.match(/^(?!.*\b(one|two|three|four|five|six|seven|eight|nine)\b)(?!.*\d).*$/)[0])
        )

    test.push(temp)
});

var calibrationValue = 0

for (let i = 0; i < test.length; i++) {
    calibrationValue += parseInt(test[i])
    
}

// Now you can use the variable 'fileContents' as needed
console.log('File contents:', test);
console.log(calibrationValue);

function convertNumber(numberString) {
    if (!isNaN(numberString)) {
        return parseInt(numberString);
    } else {

        let number = 0

        switch (numberString) {
            case "one":
                number = 1   
                break;
            case "two":
                number = 2    
                break;
            case "three":
                number = 3    
                break;
            case "four":
                number = 4    
                break;
            case "five":
                number = 5    
                break;
            case "six":
                number = 6    
                break;
            case "seven":
                number = 7    
                break;
            case "eight":
                number = 8    
                break;
            case "nine":
                number = 9    
                break;
            default:
                number = Nan;
                break;
        }

        return number
    }
}