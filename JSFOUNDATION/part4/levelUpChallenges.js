// 1st Challenge

let Tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let L = 0; L < Tea.length; L++) {
  if (Tea[L] == "chai") {
    continue;
  } else {
    selectedTeas.push(Tea[L]);
  }
}
console.log(selectedTeas);

// 2nd Challenge

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let C = 0; C < cities.length; C++) {
  if (cities[C] == "Paris") {
    continue;
  } else {
    visitedCities.push(cities[C]);
  }
}
console.log(visitedCities);

// 3rd Challenge

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num == 4) {
    break;
  } else {
    smallNumbers.push(num);
  }
}
console.log(smallNumbers);

// 4th Challenge

let Teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of Teas) {
  if (tea == "herbal tea") {
    continue;
  } else {
    preferredTeas.push(tea);
  }
}
console.log(preferredTeas);

// 5th Challenge

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulations = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

// 6th Challenge

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

// 7th Challenge

let TeaFlavours = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

TeaFlavours.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

// 8th Challenge

let CITIES = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

CITIES.forEach((CITY) => {
  if (CITY === "Sydney") {
    return;
  }
  traveledCities.push(CITY);
});
console.log(traveledCities);

// 9th Challenges

let int = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < int.length; i++) {
  if (int[i] == 7) {
    continue;
  } else {
    doubledNumbers.push(int[i] * 2);
  }
}
console.log(doubledNumbers);

// 10th Challenge

let FavouriteTeas = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];
let shortTeas = [];

for (const TEA of FavouriteTeas) {
  if (TEA.length > 10) {
    break;
  } else {
    shortTeas.push(TEA);
  }
}
console.log(shortTeas);
