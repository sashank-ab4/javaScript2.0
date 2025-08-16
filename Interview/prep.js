// var vs let vs const
// VAR
console.log(greeting) // undefined
var greeting = 'Hello from JS!'
console.log(greeting) // Hello

// hoisting example
function showHoisting (){
  console.log(message) // undefined (not an error tho)
  var message = 'Hoisting Example!';
  console.log(message) // prints here
}
showHoisting()

// redeclaration and reassignment
var website = 'example.dev'
var website = 'example.io'
website = 'example.dev.com'
console.log(website)

// LET
//basic declaration and initialization
let message = 'God is Good!'
console.log(message)

// block scope demo

let courseType = 'Basic Course'
if (true){
let courseName = 'Zero to Hero: JavaScript!' // diff variable
console.log(courseName) // 0 to hero...
}
console.log(courseType)

// reassignment (allowed)
let userCount = 35
userCount = 40
console.log(userCount) // this prints

// re declaration (not allowed)

let username = 'John'
//let username = 'jon'
console.log(username) // SyntaxError: already been declared

// CONST
// basic declaration- must initialize
const PI = 3.14159
console.log(PI)

// cannot re-assign 
//const name = 'Bob'
name = 'Bobby'
console.log(name) // TypeError

// cannot re-declare
//const age = 25
const age = 24
console.log(age) // SyntaxError

// Objcts and arrays with const

const person = {
  name: 'Shammi',
  years: 50
};
person.years = 55 // works, modifying property
console.log(person)
person.city = 'JangareddyGudem' //works, adding property

// But reassigning the reference fails

const colours = ['blue', 'green']
colours.push('pink') // works, modifying array contents
console.log(colours)

// hoisting behaviour

console.log(varVariable) //- undefined
var varVariable = 'I am Hoisted!'
//console.log(varVariable) -- prints, ok

//console.log(letVariable) // RefError
let letVariable = 'I am also Hoisted, but not accessible'
console.log(letVariable) // prints, ok

//console.log(constVariable) // RefError
const constVariable = 'I am Hoisted, but not accessible'
console.log(constVariable) // prints, ok

// scope problem
{
  var a = 12;
  let b = 23;
  const c = 34
  console.log(a, b, c) // a,b,c all prints
}
console.log(a,b,c) // b,c are not defined



