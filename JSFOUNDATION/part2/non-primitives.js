let username = {
    firstName:"Lakshay",
    isLoggedIN:true
}

username.firstName = "Mr. L"
username.lastname = "Rawat"


console.log(username.firstName);
console.log(username['firstName']);

console.log(username.lastname);
console.log(username);

console.log(typeof username);

let today = new Date()
console.log(today.getDate());
console.log(today);

// Array

let heroes = ["Spiderman","Ironman","Batman",true]
console.log(heroes);

let anotherUser = ["Lakshay","Rawat",true]
console.log(anotherUser);

console.log(heroes[0]);

// let isValue = false
// console.log(1 + isValue);

let isValue = "2abc"
console.log(Number(isValue));
console.log(typeof Number(isValue));

console.log(Number(null));
console.log(Number(undefined));
