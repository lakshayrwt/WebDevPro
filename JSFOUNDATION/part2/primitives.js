// Numbers

let balance = 120;
let anotherBalance = new Number(120);

// console.log(typeof(balance));
// console.log(typeof(anotherBalance));
console.log(anotherBalance.valueOf());

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

// null and undefined

let firstName = null;
let lastName = undefined;
// console.log(firstName);
// console.log(lastName);

// string

let myString = "Hello";
let myString1 = 'Hola';
let username = "Lakshay";

let oldGreet = myString + " Lakshay";
console.log(oldGreet);

let greetMessage = `Konnichiwa ${username}`;
let demoOne = `Value is ${2 * 2}`
console.log(greetMessage);
console.log(demoOne);

// let sm1 = Symbol()
// let sm2 = Symbol()
let sm1 = Symbol("Lakshay")
let sm2 = Symbol("Lakshay")

console.log(sm1 == sm2);
