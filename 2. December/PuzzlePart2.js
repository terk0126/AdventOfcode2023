const fs = require("fs");
fileContents = fs.readFileSync("2. December/PuzzleInput.txt", 'utf8').split("\r\n")

console.log(fileContents);

const games = [];

fileContents.forEach(element => {

    var gameId = element.match(/[0-9]+/)
    var playsMatch = element.match(/\d+ \w+/g)

    console.log(playsMatch);

    game = []
    
    playsMatch.forEach(el => {

        //color.push(el.split(' ')[1])
        //amount.push(el.split(' ')[0])

        game.push([el.split(' ')[1],el.split(' ')[0]])


    })

    games.push(game)
});
console.log(games);

//12 red cubes, 13 green cubes, and 14 blue cubes

const red = 12;
const green = 13;
const blue = 14;

var solved = [];
var sum = 0;

for (let i = 0; i < games.length; i++) {
    const element = games[i];

    var minRed = 100
    var minGreen = 100
    var minBlue = 100

    element.forEach(el => {
        if (el[0]=="red" && el[1]<minRed) {
            minRed = el[1]
        } else if (el[0]=="green" && el[1]<minGreen) {
            minGreen = el[1]
        } else if (el[0]=="blue" && el[1]<minBlue) {
            minBlue = el[1]
        }
    })

    var product = minRed*minGreen*minBlue;
    sum += product;

    solved.push([i+1,minRed,minGreen,minBlue,product,sum])
}


console.log(solved);

function MAX(arr) { 
  
    // Initialize maximum element 
    let max = arr[0]; 
  
    // Traverse array elements 
    // from second and compare 
    // every element with current max 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > max) 
            max = arr[i]; 
    } 
  
    return max; 
} 