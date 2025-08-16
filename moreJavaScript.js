// Higher order functions

function x() {
  console.log("Your Grace!");
}
x();

function y(x) {
  x();
}

// exercise

let radius = [2, 4, 6, 8];
// requirement one
let area = function (radius) {
  return Math.PI * radius * radius;
};
// requirement two
let diameter = function (radius) {
  return 2 * radius;
};
// main block- logic
let calculate = function (radius, logic) {
  let output = [];
  for (i = 0; i < radius.length; ++i) {
    output.push(logic(radius[i]));
  }
  return output;
};

// calling the functions
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

// example and its wrong approach!
let fruits = ["banana", "apple", "orange"];
/* let froots = []
for (let i=0; i< fruits.length; i++){

froots.push(fruits[i].length)
   }
console.log(froots) */
// best apprroach
let lengths = fruits.map((fruit) => fruit.length);
console.log(lengths);

/* 
map() loops through each item in the fruits array.
fruit is each item ('banana', then 'apple', etc.)
fruit.length gives length of each string.
It returns a new array with all lengths.
*/

// .forEach ()

let starks = ["robb", "jon", "sansa", "arya", "bran"];
starks.forEach((capitals) => {
  console.log(capitals.toUpperCase());
});

//.find ()

let users = [
  {
    name: "A",
  },
  {
    name: "B",
  },
];
let found = users.find((u) => u.name === "B");
console.log(found);

// .some(), .every()

const scores = [90, 85, 70];
console.log(scores.some((score) => score > 80)); // true
console.log(scores.every((score) => score > 80)); // false

// .map ()

let number = [5, 3, 4, 3, 1, 2];

let result = number.map((x) => x.toString(2));
console.log(result); // binary tranformation

// .filter()
let oddNum = number.filter((x) => {
  return x % 2;
});
console.log(oddNum);

let evenNum = number.filter((x) => x % 2 === 0);
console.log(evenNum);

// non functional programming -- sum/avg ...

function findSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum;
}

// max number

function maxValue() {
  let max = 0;
  for (let i = 0; i < number.length; i++)
    if (number[i] > max) {
      max = number[i];
    }
  return max;
}
console.log(findSum(number));
console.log(maxValue());

// now functional way using .reduce()

/*  syntax : array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);
 */

let addition = number.reduce((acc, curr) => acc + curr, 0);
console.log(addition);

let highestNum = number.reduce((high, curr) => {
  // high = curr > high
  if (curr > high) {
    high = curr;
  }
  return high;
}, 0);

console.log(highestNum);


// some real world problems

let wolves = [{
  firstName : 'Grey',
  lastName : 'Wind',
  father : 'Robb'
},
{
  firstName : 'Ghost',
  lastName : 'Snow',
  father : 'Jon Snow'
},
{
  firstName : 'Shaggy',
  lastName : 'Dog',
  father : 'Arya'
},
{
  firstName : 'Nymeria',
  lastName : 'Dayne',
  father : 'Arya'
}
]
// full names in in array!
 let direWolves = wolves.map(wolf => wolf.firstName + ' ' + wolf.lastName)

 console.log(direWolves)

 // more complex

 let swornBrothers = [{
  firstName : 'Jon',
  lastName : 'Snow',
  nationality : 'Northener',
  age: 18  
 },
{
  firstName : 'Samwell',
  lastName : 'Tarley',
  nationality : 'Southner',
  age: 18 
 },

{
  firstName : 'Jeor',
  lastName : 'Mormont',
  nationality : 'Northener',
  age: 66 
 },

{
  firstName : 'Mance',
  lastName : 'Rayder',
  nationality : 'Hardhome',
  age: 50
 },
{
   firstName : 'Olly',
  lastName : 'Glover',
  nationality : 'western',
  age: 15 
 }]

let roots = swornBrothers.reduce((acc, curr)=> {
if (acc[curr.nationality]) {
  acc[curr.nationality] = ++ acc[curr.nationality] // += 1 can also be written
} else {
  acc[curr.nationality] = 1
}
return acc
}, {})

console.log(roots)
// grouping all names under each nationality
let groupedNames = swornBrothers.reduce((acc, curr) => {
  const fullName = curr.firstName + " " + curr.lastName;
  const nation = curr.nationality;

  if (acc[nation]) {
    acc[nation].push(fullName);
  } else {
    acc[nation] = [fullName];
  }

  return acc;
}, {});


console.log(groupedNames)

// chaining of mapReduceFilter 

let stars = swornBrothers.filter(young=>
   young.age < 25).map(report => report.firstName)
console.log(stars)

// interview problem
let earnings = [{
  name: 'Rohit',
  age: 37,
  income: {
    salary: 45000,
    deposit: 2000
  }
},{
 name: 'Virat',
  age: 36,
  income: {
    salary: 35000,
    deposit: 2500
  }
},{
   name: 'Dhoni',
  age: 45,
  income: {
    salary: 40000,
    deposit: 3000
  }
}]

// find the person with highest income 

let highestEarner = earnings.reduce((acc, curr)=>{
  let accTotal =  acc.income.salary + acc.income.deposit
  let currTotal = curr.income.salary + curr.income.deposit
  if (currTotal > accTotal) {
    return curr;
  } else {
    return acc
  }

  
}, )

console.log(highestEarner)