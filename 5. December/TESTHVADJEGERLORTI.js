const fs = require("fs");
fileContents = fs.readFileSync("5. December/PuzzleInput.txt", 'utf8') //.split("\r\n")


//convert each number in to different arrays
const seeds = fileContents.match(/seeds:\s([\d\s]+)/g)[0]
                                                        .split(" ")
                                                        .filter(el => el)
                                                        .splice(1)
                                                        .map(el => parseInt(el.trim()))



const seedToSoil = fileContents.match(/seed-to-soil map:\s([\d\s]+)/g)[0]
                                                                        .split("\r\n")
                                                                        .filter(el => el)
                                                                        .splice(1)
                                                                        .map(el => el.split(" ").map(el => parseInt(el)))

const soilToFertilizer = fileContents.match(/soil-to-fertilizer map:\s([\d\s]+)/g)[0].split("\r\n").filter(el => el).splice(1).map(el => el.split(" ").map(el => parseInt(el)))
const fertilizerToWater = fileContents.match(/fertilizer-to-water map:\s([\d\s]+)/g)[0].split("\r\n").filter(el => el).splice(1).map(el => el.split(" ").map(el => parseInt(el)))
const waterToLight = fileContents.match(/water-to-light map:\s([\d\s]+)/g)[0].split("\r\n").filter(el => el).splice(1).map(el => el.split(" ").map(el => parseInt(el)))
const lightToTemperature = fileContents.match(/light-to-temperature map:\s([\d\s]+)/g)[0].split("\r\n").filter(el => el).splice(1).map(el => el.split(" ").map(el => parseInt(el)))
const temperatureToHumidity = fileContents.match(/temperature-to-humidity map:\s([\d\s]+)/g)[0].split("\r\n").filter(el => el).splice(1).map(el => el.split(" ").map(el => parseInt(el)))
const humidityToLocation = fileContents.match(/humidity-to-location map:\s([\d\s]+)/g)[0].split("\r\n").filter(el => el).splice(1).map(el => el.split(" ").map(el => parseInt(el)))


const Wierd = []
let answer = 47909640
const hum2LocMap = [ 47909639, 147672017, true ]

humidityToLocation.forEach(element => {
    var testing = false
    if (element[0]<answer && element[0]+element[2] > answer) {
        testing = true
    }
    Wierd.push([element[0],element[0]+element[2],testing])
});


console.log(Wierd);