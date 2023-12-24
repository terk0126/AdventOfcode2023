const fs = require("fs");
fileContents = fs.readFileSync("3. December/PuzzleInput.txt", 'utf8').split("\r\n")


let indexOfNumbersAndSymbols = []
let sum = 0

fileContents.forEach(element => {



    /*
    var numbers = element.match(/[0-9]+/g)

    var symbols = element.match(/[%*=/+$&@#-]+/g)
    */

    var numbers = []
    var numberPattern = /[0-9]+/g
    while ((match = numberPattern.exec(element)) !== null) {numbers.push([match[0],match.index]);}

    var symbols = []
    var symbolPattern = /[%*=/+$&@#-]+/g
    while ((match = symbolPattern.exec(element)) !== null) {symbols.push([match[0],match.index]);}


    var cache = [element]


    
    var numberIndexesToPush = []
    if(numbers){

    
        var indexOfNumber = element.indexOf(String(numbers[0]))

        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i][0];

            indexOfNumber = numbers[i][1]

            const indexies = []

            //for (let j = 0; j < number.length; j++) {numberIndexesToPush.push([indexOfNumber+j,parseInt(number)])}

            for (let j = 0; j < number.length; j++) {indexies.push(indexOfNumber+j)}

            numberIndexesToPush.push([indexies,parseInt(number)])

        }
    } else {numberIndexesToPush.push([[-3],-3])}

    cache.push(numberIndexesToPush)


    var symbolIndexesToPush = []
    if(symbols){
        var indexOfSymbol = element.indexOf(String(symbols[0]))

        for (let l = 0; l < symbols.length; l++) {
            const symbol = symbols[l][0];
    
            indexOfSymbol = symbols[l][1];
    
            for (let k = 0; k < symbol.length; k++) {symbolIndexesToPush.push(indexOfSymbol+k)}

            indexOfSymbol += symbol.length

        }

    } else {symbolIndexesToPush.push([-1,-1])}
    cache.push(symbolIndexesToPush)


    indexOfNumbersAndSymbols.push(cache)
})

console.log(indexOfNumbersAndSymbols);


function isNumberWithinRange(arr, targetNumber) {

    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - targetNumber) <= 1) {
            // Found a number within 1 units of the targetNumber
            return true;
        }
    }
    // No number within 2 units found
    return false;
}


for (let h = 0; h < indexOfNumbersAndSymbols.length; h++) {


    const line = indexOfNumbersAndSymbols[h];
    let symbols = line[2]; // Initialize symbols based on the current line

    if (h === 0) {
        if (indexOfNumbersAndSymbols.length > 1) {
            const lineBelow = indexOfNumbersAndSymbols[h + 1];
            symbols = symbols.concat(lineBelow[2]); // Concatenate symbols from the line below
        }
    } else if (h > 0 && h < indexOfNumbersAndSymbols.length - 1) {
        const lineAbove = indexOfNumbersAndSymbols[h - 1];
        const lineBelow = indexOfNumbersAndSymbols[h + 1];

        symbols = symbols.concat(lineAbove[2], lineBelow[2]); // Concatenate symbols from both lines
    } else if (h === indexOfNumbersAndSymbols.length - 1) {
        const lineAbove = indexOfNumbersAndSymbols[h - 1];
        symbols = symbols.concat(lineAbove[2]); // Concatenate symbols from the line above
    }

    const numbers = line[1];

    console.log(numbers);
    console.log(`symbols ${symbols}`);

    numbers.forEach(number => {

        var shouldBeAdded = false

        console.log(number);

        for (let p = 0; p < number[0].length; p++) {
            const element = number[0][p];

            if (isNumberWithinRange(symbols, element)) {
                shouldBeAdded = true
            }
        }

        if (shouldBeAdded) {
            sum += number[1];
        }

        if (shouldBeAdded) {
            var string = true
        } else var string = "f"

        console.log([sum,number[1],string]);
    });
}
