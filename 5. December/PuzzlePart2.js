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

console.log(humidityToLocation);

//Create SeedPairs array [[start,length],...]
var seedPairs = [];

for(var i = 0; i < seeds.length; i += 2)
{
    seedPairs.push(seeds.slice(i, i + 2));
}

console.log(seedPairs);

let lowest = 100**1000
var counter = 0

seedPairs.forEach(seedpair => {

    

    for (let j = 0; j < seedpair[1]; j++) {
    const seed = seedpair[0]+j



    var soil = seed
    for (let i = 0; i < seedToSoil.length; i++) {
        const map = seedToSoil[i];
        if (seed >= map[1] && seed <= map[1]+map[2]) {
            var soil = map[0]+seed-map[1]
            break;
        } else {continue}   
    }

    var fertilizer = soil
    for (let i = 0; i < soilToFertilizer.length; i++) {
        const map = soilToFertilizer[i];
        if (soil >= map[1] && soil <= map[1]+map[2]) {
            var fertilizer = map[0]+soil-map[1]
            break;
        } else {continue} 
    }

    var water = fertilizer
    for (let i = 0; i < fertilizerToWater.length; i++) {
        const map = fertilizerToWater[i];
        if (fertilizer >= map[1] && fertilizer <= map[1]+map[2]) {
            var water = map[0]+fertilizer-map[1]
            break;
        } else {continue} 
    }

    var light = water
    for (let i = 0; i < waterToLight.length; i++) {
        const map = waterToLight[i];
        if (water >= map[1] && water <= map[1]+map[2]) {
            var light = map[0]+water-map[1]
            break;
        } else {continue} 
    }

    var temperature = light
    for (let i = 0; i < lightToTemperature.length; i++) {
        const map = lightToTemperature[i];
        if (light >= map[1] && light <= map[1]+map[2]) {
            var temperature = map[0]+light-map[1]
            break;
        } else {continue} 
    }

    var humidity = temperature
    for (let i = 0; i < temperatureToHumidity.length; i++) {
        const map = temperatureToHumidity[i];
        if (temperature >= map[1] && temperature <= map[1]+map[2]) {
            var humidity = map[0]+temperature-map[1]
            break;
        } else {continue} 
    }

    var location = humidity
    for (let i = 0; i < humidityToLocation.length; i++) {
        const map = humidityToLocation[i];
        if (humidity >= map[1] && humidity <= map[1]+map[2]) {
            var location = map[0]+humidity-map[1]
            break;
        } else {continue} 
    }


    /*
    console.log(
    `
    Seed: ${seed}, Soil: ${soil}, Fertilizer: ${fertilizer}, Water: ${water}, Light: ${light}, 
    Temperature: ${temperature}, Humidity: ${humidity}, Location: ${location}`

        );
        */

        
        if(location<lowest) {
            lowest = location
            console.log(
                `
                SeedPair: ${seedpair}
                Seed: ${seed}, Soil: ${soil}, Fertilizer: ${fertilizer}, Water: ${water}, Light: ${light}, 
                Temperature: ${temperature}, Humidity: ${humidity}, Location: ${location}`
        
                );
        }
        

        /*
        if (location === 50855035) {
            console.log(
                ` SVAR SVAR SVAR SVAR SVAR SVAR SVAR
                SeedPair: ${seedpair}
                Seed: ${seed}, Soil: ${soil}, Fertilizer: ${fertilizer}, Water: ${water}, Light: ${light}, 
                Temperature: ${temperature}, Humidity: ${humidity}, Location: ${location}`
        
                );
        }
        */

        /*

        if (humidity> 47909639 && humidity<147672017) {
            console.log(
                ` SVAR SVAR SVAR SVAR SVAR SVAR SVAR dasfsdfsd
                SeedPair: ${seedpair}
                Seed: ${seed}, Soil: ${soil}, Fertilizer: ${fertilizer}, Water: ${water}, Light: ${light}, 
                Temperature: ${temperature}, Humidity: ${humidity}, Location: ${location}`
        
                );
        }
        */

        counter += 1

        if (counter % 10000000 === 0) {
            //console.log(counter);
        }
    }

    
});

console.log(lowest);