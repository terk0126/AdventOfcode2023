const fs = require("fs");
fileContents = fs.readFileSync("4. December/PuzzleInput.txt", 'utf8').split("\r\n")

let numbers = []
let sum = 0
let total = 0 

// Finder alle numre i txt-filen og lægger dem ind i arrayen numbers.
fileContents.forEach(line => {
    const pushNumber = line.match(/[0-9]+/g).slice(1)
    numbers.push(pushNumber)
});

//Deler winningnumbers og My numbers ud i to forskellige arrays
var winningNumbers = numbers.map(el => el.slice(0,10))
var myNumbers = numbers.map(el => el.slice(10))

var numbersInCommon = []


// Finder de tal det er med i hver array for hver linje
for (let i = 0; i < winningNumbers.length; i++) {
    const winningNumbersCard = winningNumbers[i];
    const myNumbersCard = myNumbers[i];

    numbersInCommon.push(winningNumbersCard.filter(value => myNumbersCard.includes(value)));
}


for (let j = 0; j < numbersInCommon.length; j++) {


    //Hvis der er nogle numre der er ens så skal vi uddele point
    if (numbersInCommon[j].length != 0) {
        sum += 2** (numbersInCommon[j].length-1)
        total += numbersInCommon[j].length
        //console.log([winningNumbers[j],myNumbers[j]]);
        //console.log([numbersInCommon[j],numbersInCommon[j].length,2**(numbersInCommon[j].length-1)]);
    } else {console.log([numbersInCommon[j].length,0]);}
    
    
}

console.log(sum);
console.log(total);