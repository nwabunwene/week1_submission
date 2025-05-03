let addition = 5 + 6;
console.log(addition);

console.log("Welcome to my website");

let favFood = "white soup";
console.log(`My favorite food is ${favFood}`);

let myName = "Wene";
console.log(myName);

let age = 30;
console.log(age);

console.log(`My name is ${myName} and I am ${age} years old`);

let five = 5;
let six = 6;
let negative = -1;
let bool = six > five;
let bool0 = six < five;

console.log(`Is ${six} > ${five} ?`, bool);
console.log(`${six}<${five}`, bool0);

console.log(bool);

let favProgLang = "python";
let newLearn = "JS, HTML & CSS";

console.log(
  `My favorite programming language is ${favProgLang} but I'm now learning ${newLearn} and finding it fun!`
);

let aboutMe = "I am a moderately pleasant person";

if ((aboutMe.typeof = String)) {
  console.log(`${aboutMe}`);
} else if ((aboutMe.typeof = bool)) {
  console.log("That's not right");
} else {
  console.log("values is not a string");
}

if (aboutMe.length > 10) {
  console.log("The string is greater than 10 characters");
} else {
  console.log("The string is less than ten characters");
}

function sayWelcome(user) {
  console.log("Hello Wene");
}

sayWelcome();

function sayHello(username, age, location) {
  console.log(
    `Welcome to my page, ${username}, who is ${age} years old, from ${location}.`
  );
}

sayHello("wene", 30, "Norwich");

function add(param1, param2) {
  let combo = param1 + param2;
  console.log(`The sum of both parameters is ${combo}`);

  return param1 + param2;
}

add(5, 27);
add(294756, 8484);

function multiply(param1, param2) {
  let combo = param1 * param2;
  console.log(`The multiplication of both parameters is ${combo}`);

  return param1 * param2;
}
multiply(5, 27);
multiply(294756, 8484);

function division(param1, param2) {
  let combo = param1 / param2;
  console.log(`The division of both parameters is ${combo}`);

  return param1 / param2;
}
division(5, 27);
division(294756, 8484);

function subtract(param1, param2) {
  let combo = param1 - param2;
  console.log(`The subtraction of both parameters is ${combo}`);

  return param1 - param2;
}
subtract(5, 27);
subtract(294756, 8484);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return division(a, b);
  }
}

calculate(5, 3, "*");

// testing out the DOM
const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1);

const p = document.createElement("p");
p.textContent =
  "This is my attempt to create a new paragraph element on the html index page using javascript. The necessary processes involved was declaring a variable using the const keyword, naming the variable after the p-tag and using the document.createElement('P) method. Then I used this method to add text to my p tag p.textContent. For this paragraph to show up on my webpage, I would need to append it using body.appendChild(p). I had to add one more step to it which was apply the querySelector to the main section and then use main.appendChild(p). I think this is absolutely brilliant!";
const footer = document.querySelector("footer");
footer.appendChild(p);

//Attempt to remove an element. I will first add an element and then try to remove it.

const main = document.querySelector("main");
const p1 = document.createElement("p1");
p1.textContent =
  "This is text which I will remove, I'm only trying out the remove method to see how it works.";
main.appendChild(p1);
p1.remove();

// creating a list of items
const ol = document.createElement("ol");
ol.textContent = "first item in ordered list";
const header = document.querySelector("header");
header.appendChild(ol);

//creating the second list item
const ol0 = document.createElement("ol0");
ol0.textContent = "second item in ordered list";
header.appendChild(ol0);
// const ol = document.createElement("ol");
// ol.textContent = "second item in ordered list";
// header.appendChild(ol);

// "second item in ordered list", "third item in ordered list", "fourth item in ordered list";

// playing around with events: handlers and listeners
const button = document.querySelector("button");
console.log(button.textContent);

//event handler

function handleClick() {
  const button = document.querySelector("button");
  button.textContent = "Wene clicked the button";
  console.log(button.textContent);
}

button.addEventListener("click", handleClick);
