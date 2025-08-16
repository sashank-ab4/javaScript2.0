"use strict";
// this keyword

// this- in global scope
console.log(this); // globalObject -  window(in browsers)

// this- in functions
//non strict mode
function x() {
  console.log(this);
}
x(); // window

//strict mode
function show() {
  console.log(this);
}
show(); // undefined
window.show(); // window

// this- in onjects
const obj = {
  a: 1,
  b: 2,
  c: function () {
    // c is METHOD
    console.log(this);
  },
};
obj.c(); // {a: 1, b: 2, c: ƒ}

const user = {
  name: "Vinnu",
  age: 15,
  showName() {
    console.log(this.name); // 'this' here is object named-user
  },
};
user.showName(); // Vinnu

const user2 = {
  name: "Vivek",
};

user.showName.call(user2); // call() method

// this- in arrow functions

const viking = {
  lead: "Ragnar Lothbrok", // if its a normal function, then it will be printed name
  greet: () => {
    console.log(this); // just(this) gives-window obj
    console.log(this.lead); // undefined
  },
};
viking.greet();

// this- in nested arrow functions

const obj3 = {
  x: 99,
  y: function () {
    // this part is z's 'enclosing lexical context'
    console.log(this); // {x: 99, y: ƒ}
    const z = () => {
      //console.log(this); // {x: 99, y: ƒ}
    };
    z();
  },
};
obj3.y();

// this- inside DOM elements

const myButton = document.querySelector("#button");

myButton.addEventListener("click", () => {
  console.log(this); //  button element
});

//Trio of function manipulation
// .call(), .bind(), .apply()

const ab = {
  firstName: "Sashank",
  lastName: "Akkabattula",
  printFullname: function () {
    console.log(this.firstName, this.lastName);
  },
};
ab.printFullname();

const rgs = {
  firstName: "Rohit",
  lastName: "Sharma",
};
// function borrowing'
ab.printFullname.call(rgs);

// with many arguments

const family = { being: "Nani Babu" };
function residents(place, years) {
  console.log(`${this.being} is residing at ${place} since ${years} years!`);
}

residents.call(family, "Rajahmundry", 50);
//. apply() method

residents.apply(family, ["Rajahmundry", 50]);
// Same as .call(), but arguments are passed as an array/list.

// .bind() method

const boundFunction = residents.bind(family, "Rajahmundry", 50);
console.log(boundFunction) // prints function
boundFunction();
//Returns a new function with a bound this, but does not call it immediately.

// example

const teacher = { teacher: 'Eddad Stark'};

function greet(message){
  console.log(`${message} your grace - ${this.teacher}`)
}


greet.call(teacher, 'Hello')
greet.apply(teacher, ['Gracias'])
const boundGreet = greet.bind(teacher, 'Hola')
boundGreet()