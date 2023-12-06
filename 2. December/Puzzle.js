const { prototype } = require("events");
const fs = require("fs");
fileContents = fs.readFileSync("2. December/PuzzleInput.txt", 'utf8').split("\r\n")

console.log(fileContents);

const games = [];

fileContents.forEach(element => {

    //console.log(element.match(/(?<=.*(red))[0-9]/));


    var countColor = [
        element.match(/red/g).length,
        element.match(/blue/g).length,
        element.match(/green/g).length
    ]
    
    var gameId = element.match(/[0-9]+/)
    var playsMatch = element.match(/\d+ \w+/g)

    console.log(playsMatch);

    //var temp = element.splice(0,0)
    
        const plays
            "color": 
            playsMatch[0].split(' ')[0]}
    

    games.push({
        "game":gameId[0],
        "plays":MAX(countColor),
        "play":count
    })
});
console.log(games);



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