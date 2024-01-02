const fs = require("fs");
fileContents = fs.readFileSync("5. December/PuzzleInput.txt", 'utf8') //.split("\r\n")

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

let locations = []

seeds.forEach(seed => {

    

    var soil = seed
    for (let i = 0; i < seedToSoil.length; i++) {
        const map = seedToSoil[i];
        if (seed >= map[1] && seed <= map[1]+map[2]-1) {
            console.log(["SoilMap",map]);
            var soil = map[0]+Math.abs(map[1]-seed);
            break;
        } else {continue}   
    }

    var fertilizer = soil
    for (let i = 0; i < soilToFertilizer.length; i++) {
        const map = soilToFertilizer[i];
        if (soil >= map[1] && soil <= map[1]+map[2]-1) {
            console.log(["FertilizerMap",map]);
            var fertilizer = map[0]+Math.abs(map[1]-soil);
            break;
        } else {continue} 
    }

    var water = fertilizer
    for (let i = 0; i < fertilizerToWater.length; i++) {
        const map = fertilizerToWater[i];
        if (fertilizer >= map[1] && fertilizer <= map[1]+map[2]-1) {
            console.log(["WaterMap",map]);
            var water = map[0]+Math.abs(map[1]-fertilizer);
            break;
        } else {continue} 
    }

    var light = water
    for (let i = 0; i < waterToLight.length; i++) {
        const map = waterToLight[i];
        if (water >= map[1] && water <= map[1]+map[2]-1) {
            console.log(["LightMap",map]);
            var light = map[0]+Math.abs(map[1]-water);
            break;
        } else {continue} 
    }

    var temperature = light
    for (let i = 0; i < lightToTemperature.length; i++) {
        const map = lightToTemperature[i];
        if (light >= map[1] && light <= map[1]+map[2]-1) {
            console.log(["TempMap",map]);
            var temperature = map[0]+Math.abs(map[1]-light);
            break;
        } else {continue} 
    }

    var humidity = temperature
    for (let i = 0; i < temperatureToHumidity.length; i++) {
        const map = temperatureToHumidity[i];
        if (temperature >= map[1] && temperature <= map[1]+map[2]-1) {
            console.log(["HumidityMap",map]);
            var humidity = map[0]+Math.abs(map[1]-temperature);
            break;
        } else {continue} 
    }

    var location = humidity
    for (let i = 0; i < humidityToLocation.length; i++) {
        const map = humidityToLocation[i];
        if (humidity >= map[1] && humidity <= map[1]+map[2]-1) {
            console.log(["Location",map]);
            var location = map[0]+Math.abs(map[1]-humidity);
            break;
        } else {continue} 
    }


    
    console.log(
    `
    Seed: ${seed}, Soil: ${soil}, Fertilizer: ${fertilizer}, Water: ${water}, Light: ${light}, 
    Temperature: ${temperature}, Humidity: ${humidity}, Location: ${location}`

    );
    

    locations.push([seed,location])
});

console.log(locations);

var lowest = locations[0]

locations.forEach(location => {
    if(location[1]<lowest[1]) {lowest = location}
})
console.log(lowest);
