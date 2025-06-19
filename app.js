// Data Types and variables
// let
 let years = 24;
 years = years + 1
 console.log(years)
//const
 const points = 100;
 console.log(points)

// currency converter
// 1$ = 86.25₹
// Converting 200 dollars into Indian rupeees
let USD = 20
let INR = USD * 86.25 
console.log('your coversion is  ' + INR +'₹');

//Conditionals

let age = 16

if (age > 18){
  console.log(`You are ${age} years old, you may enter the club`)
}
else if(age === 18){
  console.log(`Whoa,you just turned ${age}, please welcome!`)
}
else {
  console.log(`You are just ${age}, you are not allowed!`)
} 
// using logical operators
let voterAge = 18
let hasId = false

if (voterAge >=18 || true){
  console.log('You are now eligible to vote!')
}
// ternary operator -- {&&, ||, !}
let isRaining = true
isRaining ? console.log('Rain stopped the play') : console.log('Play Resumes')

let marks = 10
let hasAttendance = false
let grade = marks >= 90 && hasAttendance ? 'DISTINCTION': 'FIRST CLASS'
console.log(grade)

// LOOPS 

// let counter = 1
// while (counter <=7 ){
//   console.log(counter);
//   counter = counter + 1;
// }
// console.log('while loop finished!');

//print the numbers starting from 1-15, then classify them as even if even and odd if odd, omega if divisible by 5.

 for (let i=1; i<=15; i++){
  if (i % 5 === 0 ) {
    console.log(`${i} - Omega`)
    }
  else if (i%2===0){
    console.log(`${i} - even`)
  }
  else {console.log(`${i} - odd`)}
  
}

// print out all the characters from the string: SASHANK AKKBATTULA

let str = 'SASHANK'
for (let i=0; i< str.length; ++i){
  console.log(str[i])
}

let weight = 98
let paid = false
if (weight >= 90 || true ){
   console.log(`you paid for over weight ${weight}, you can take `)
} else {
  console.log(`you did not paid, and overweight with ${weight} , not allowed!`)
}
