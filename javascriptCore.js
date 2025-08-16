// 01 Prototype and Prototypal Inheritance

let arrayOne = ["Sashank", "Sachin"];
let object = {
  name: "Samuel John",
  city: "KGM",
  getIntro: function () {
    console.log(`${this.name} is from ${this.city}`);
  },
};
object.getIntro();
// prototype chain
console.log(typeof arrayOne); // object
console.log(arrayOne.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null, End of chain

function fun(name) {
  console.log("Hi ra", name);
}
fun("Vinnu");

Function.prototype.mybind = (function () {
  console.log("I am Ghost!");
})();
function fun1() {}
fun1(); // i am ghost!

// 02 Currying in JavaScript

let multiply = function (a) {
  return function (b) {
    console.log(a * b);
  };
};
// multiply(2)(3)
const multiplyByTwo = multiply(2);
multiplyByTwo(3);
const multiplyByThree = multiply(3); // () multiply with what
multiplyByThree(99); //() which num that we wanted to multiply
//Real world exmp - logger function

/* function log(level, message) {
  console.log(`[${level}] - ${message}`);
}

log("ERROR", "Something failed");
log("INFO", "App started"); */

// curried version

let log = function (level) {
  return function (message) {
    console.log(`[${level}] : ${message}`);
  };
};
const errorLog = log("ERROR");
const infoLog = log("INFO");
const finalLog = log("CRASHED");

errorLog("Something failed!");
infoLog("App Started!");
finalLog("App Closed!");

// DOM Style Setter

function setStyle(property) {
  return function (value) {
    return function (element) {
      element.style[property] = value;
    };
  };
}
const setFontSize = setStyle("color")("blue");
setFontSize(document.querySelector("h1"));

// 03 Debouncing in Javascript

let counter = 0;
let getData = () => {
  console.log("Fetching data...", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const betterFunction = debounce(getData, 500);

/* User types "B" "Ba" "Bag" "Bags" (quickly)

betterFunction() → sets a timer → cleared by next key
betterFunction() → sets a new timer → cleared again

Pause...

 500ms later → getData() finally runs once */

