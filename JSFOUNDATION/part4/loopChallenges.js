// 1st Challenge

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

// 2nd Challenge

let countdown = [];
i = 5;
while (i >= 1) {
  countdown.push(i);
  i--;
}
console.log(countdown);

// 3rd Challenge

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea(type "stop" to finish)`);

  if (tea !=="stop"){
    teaCollection.push(tea)
  }
} while (tea !== "stop");

// 4th Challenge

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

// 5th Challenge

let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let l = 0; l < numbers.length; l++) {
  takeNumber = numbers[l] * 2;
  multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);

// 6th Challenge

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = []

for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity)
    
}
console.log(cityList);
