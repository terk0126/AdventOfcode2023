const fs = require("fs");
fileContents = fs.readFileSync("2. December/PuzzleInput.txt", 'utf8').split("\r\n")

// Formats the data.
const games = [];
fileContents.forEach(element => {

    var playsMatch = element.match(/\d+ \w+/g)

    console.log(playsMatch);

    game = []
    
    playsMatch.forEach(el => {

        //color.push(el.split(' ')[1])
        //amount.push(el.split(' ')[0])

        game.push([el.split(' ')[1],parseInt(el.split(' ')[0])])


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

    console.log(element);
    console.log([element[0][0],element[0][1],String(i)]);

    var minRed = -1
    var minGreen = -1
    var minBlue = -1

    var test = 0

    element.forEach(el => {
        if (el[0]==="red" && (parseInt(el[1])>minRed || minRed === -1)) {minRed = parseInt(el[1])} else 
        if (el[0]==="green" && (parseInt(el[1])>minGreen || minGreen === -1)) {minGreen = parseInt(el[1])} else 
        if (el[0]==="blue" && (parseInt(el[1]) >minBlue || minBlue === -1)) {minBlue = parseInt(el[1])}

        test += 1
        
        console.log([String(test),minRed,minGreen,minBlue]);
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