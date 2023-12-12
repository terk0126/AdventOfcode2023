const { prototype } = require("events");
const fs = require("fs");
fileContents = fs.readFileSync("2. December/PuzzleInput.txt", 'utf8').split("\r\n")

console.log(fileContents);

const games = [];

fileContents.forEach(element => {

    //console.log(element.match(/(?<=.*(red))[0-9]/));


    /*var countColor = [
        element.match(/red/g).length,
        element.match(/blue/g).length,
        element.match(/green/g).length
    ]*/
    
    var gameId = element.match(/[0-9]+/)
    var playsMatch = element.match(/\d+ \w+/g)

    console.log(playsMatch);

    game = []
    
    playsMatch.forEach(el => {

        //color.push(el.split(' ')[1])
        //amount.push(el.split(' ')[0])

        game.push([el.split(' ')[1],el.split(' ')[0]])


    })
    //var amount = playsMatch.forEach(el => {el.split(' ')[0]})

    //var temp = element.splice(0,0)
    
    /*
    games.push({
        "gameID":gameId[0],
        "Game": game
    })
    */
    games.push(game)
});
console.log(games);

//12 red cubes, 13 green cubes, and 14 blue cubes

const red = 12;
const green = 13;
const blue = 14;

var sum = 0;
var solved = []

for (let i = 0; i < games.length; i++) {
    const element = games[i];

    var addId = true;

    element.forEach(el => {
        if (el[0]=="red" && el[1]>12) {
            addId = false
        } else if (el[0]=="green" && el[1]>13) {
            addId = false
        } else if (el[0]=="blue" && el[1]>14) {
            addId = false
        }
    })

    console.log(addId);

    if (addId == true) {
        console.log(i);
        console.log(sum);
        sum += i+1
    }

    solved.push([i+1,addId,sum])
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