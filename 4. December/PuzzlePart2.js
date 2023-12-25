const fs = require("fs");
fileContents = fs.readFileSync("4. December/PuzzleInput.txt", 'utf8').split("\r\n")

let numbers = []
let totalCards = 0

fileContents.forEach(line => {


    const mathces = line.match(/[0-9]+/g)
    const numbersCard = mathces.slice(1)
    const cardNumber = mathces[0]

    numbers.push([cardNumber,numbersCard])
    
});

function commonNumbers(numbersArray) {
    const winningNumbers = numbersArray.map(el => el[1].slice(0,10))
    const myNumbers = numbersArray.map(el => el[1].slice(10))
    const cardNumber = numbersArray.map(el => parseInt(el[0]))
    
    const numbersInCommon = []

    for (let i = 0; i < numbersArray.length; i++) {
        const winningNumbersCard = winningNumbers[i];
        const myNumbersCard = myNumbers[i];

        const numbersInCommonCard = winningNumbersCard.filter(value => myNumbersCard.includes(value))
    
        numbersInCommon.push([cardNumber[i],winningNumbersCard,myNumbersCard,numbersInCommonCard]);
    
    }

    return numbersInCommon
}

totalCards += numbers.length

console.log([totalCards,0]);

let useNumbers = numbers

while (useNumbers.length > 0) {
    

    var currentNumbers = commonNumbers(useNumbers)
    var newNumbers = []

    currentNumbers.forEach(el => {

        //console.log(`CardNumber: ${el[0]}`,"WinningNumbers",el[3]);

        for (let k = 0; k < el[3].length; k++) {
            if (numbers[el[0] + k]) {
                //console.log(["-",el[0],el[0] + k + 1]);
                newNumbers.push(numbers[el[0] + k]);
            }
        }
    });

    totalCards += newNumbers.length

    console.log([totalCards,newNumbers.length]);

    useNumbers = newNumbers
}
