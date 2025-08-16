// Destructuring
//Object

const employee = {
  id: 1,
  name: "Sashank",
  age: 24,
  department: "Frontend",
  address: {
    city: "Rajahmundry",
    district: "West Godavari",
  },
};
//const { name: fullName = "Sashank Akkabattula", age, id } = employee;
const {
  address: { district },
} = employee;
console.log(district);

// functions

function displayName({ name, age }) {
  console.log(
    `My name is ${employee.name} and I am ${employee.age} years old!`
  );
}
displayName(employee);

// Arrays

const fruits = ["Apple", "Banana", "Custard", "Dew Berry", "Fig"];

const [one, two, ...rest] = fruits;

console.log(rest);

// example -  arrays
const groceryList = [
  { item: "Bread", price: 45, category: "Dairy" },
  { item: "Milk", price: 42, category: "Dairy" },
  { item: "Brocolli", price: 60, category: "Veggies" },
  { item: "Chicken", price: 110, category: "Meat" },
  { item: "Carrot", price: 50, category: "Veggies" },
  { item: "Strawberry", price: 120, category: "Fruits" },
];
const [, , , , ...rem] = groceryList;
console.log();

// ternary operator:

let ageOfVoter = 19;
let canVote = ageOfVoter >= 18 ? "Can Vote" : "Should be above 18 years!";

console.log(canVote);

function checkAccess(years) {
  return years >= 18 ? "Access Granted" : "Access Denied";
}
console.log(checkAccess(17));

function generateGreeting(signedIn, paidMember) {
  return signedIn && paidMember ? "Hello, Premium User" : "Hello, Guest";
}
console.log(generateGreeting());

// optional chaining

const student = {
  studentName: "Sashank",
  medicals: {
    bloodGrp: "o+",
    fractures: "No",
  },
};
console.log(student?.medicals?.bloodGrp);
//Functions
const hey = {
  sayHi: () => console.log("Hi!"),
};

hey?.sayHi?.(); // ✅ Calls the function
