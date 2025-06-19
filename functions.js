// Functions

function greetUser (name, time){
  console.log(`Hey, Good ${time}, ${name}!`)
}
greetUser('Jon Snow', 'Morning');

// with return value
function main (){
  return 'Daenarys'
}
console.log(main());

function sum (num1, num2){
 return num1 * num2
}  // without retrun value, it gives : undefined

console.log(sum(87,93));

function conversion (dollars){
  const INR = dollars * 86.25
  return INR
} // not preferable (me)
console.log(conversion(101));

function convertUsdToAud (dollars){
let AUD = dollars * 1.5
return AUD
} // best and preferred (yt)
console.log(convertUsdToAud (500))

// without return value
function multiply(a, b) {
  console.log(a * b); // just prints
}
multiply(7, 7); // 20

// ARROW functions
// syntax example
const substract = (a, b) => {
  return a - b;
};
console.log(substract(100,50));
// when only one return statement, can skip return and {}
const multiplication = (c,d) => c * d;
console.log(multiplication(8,8));

// with no parameters
const sayHello = () => console.log('Hey!')
sayHello();

// only 1 parameter, no need of braces
const square = n => n * n;
console.log(square(25));

// with return 
const toUpper = (name) => {
  return name.toUpperCase();
};
console.log(toUpper("sashank")); 

