//Closures
//undefined vs not-defined
/* let a;
console.log(a) // undefined
console.log(b)  */ // refernece error, not at all defined

myName = "Jon Snow";
console.log(myName);
myName = "Arya Stark";
console.log(myName);

// the scope chain & lexical environment

function a() {
  console.log(b);
}
var b = 10;
a(); // 10

function c() {
  var e = 15; // can also give same output
  d();
  function d() {
    console.log(e);
  }
}
// var e = 15 can also give same output
c(); // 15
//console.log(e) placing it here, calling out of function -- throws a ReferenceError

// global vs local vs block scope

let x = 10; // Global Scope

function test() {
  let y = 45; // Local Scope
  if (true) {
    let z = 18; // Block Scope
    console.log(x, y, z); // ✅ All accessible
  }
  // console.log(z); ❌ Not accessible here
}

test();
// console.log(y); ❌ Not accessible here

// Lexical environment and scope chain

function outer() {
  let name = "Aegon the Sixth!";

  function inner() {
    console.log(name); // ✅ Can access 'name' because of lexical scope
  }

  inner();
}

outer();

// #2
let globalVariable = "I am global Variable";

function outerFunction() {
  let outerVar = "I am outer Variable";

  function innerFunction() {
    let innerVar = "I am inner Variable";
    console.log(globalVariable, outerVar, innerVar);
  }

  innerFunction();
}

outerFunction();

/* 
Looks for globalVar → Not in inner → Checks outer → Not there → Finds in global ✅
Looks for outerVar → Not in inner → Finds in outer ✅
Looks for innerVar → Found in inner ✅
 */

// VAR vs LET vs CONST
//-- var
function test() {
  var x = 10;
  if (true) {
    var x = 20; // same variable (function-scoped)
    console.log(x); // 20
  }
  console.log(x); // 20
}

//--let
function test1() {
  let y = 40;
  if (true) {
    let y = 30; // new block-scoped x
    console.log(y); // 20
  }
  console.log(y); // 10
}
test1();
// -- const
const pi = 3.14;
console.log(pi);
//const pi = 3.15484 // throws-SyntaxError: Identifier 'pi' has already been declared
const person = { name: "Jon" };
person.name = "Snow"; //✅ Allowed
console.log(person);

// Temporal dead zone
//console.log(man) --throws refErr as it is in TDZ
let man = "human";
console.log(man); // but here gives output

// scope comparison
function scopeExample() {
  var a = 1; // function scope
  let b = 2; // block scope
  const c = 3; // block scope

  if (true) {
    var a = 4; // same variable (overwrites)
    let b = 5; // new b (different scope)
    const c = 6; // new c (different scope)
    console.log(a, b, c); // 4 5 6
  }

  console.log(a); // 4 (var got changed)
  console.log(b); // 2 (let preserved)
  console.log(c); // 3 (const preserved)
}
scopeExample();

// BlockScope
{
  var q = 90;
  let r = 60;
  const s = 30;
  console.log(q); //90
  console.log(r); //60
  console.log(s); //30
}

//console.log(q); // ❌ ReferenceError
//console.log(r); // ❌ ReferenceError
//console.log(s); // ✅ "90" — `var` is NOT block-scoped

// Variable Shadowing
let fruit = "Mango";

function testing() {
  let fruit = "Apple"; // shadows the outer `fruit`
  console.log(fruit); // Apple
}

testing();
console.log(fruit); // Mango

//var case
var nine = 99;
{
  var nine = 9;
  console.log(nine); // 9
}
console.log(nine); // 9 even outside

// let & const case
let four = 44;
const twoThree = 2323;
{
  let four = 4;
  console.log(four); // 4
  const twoThree = 23;
  console.log(twoThree); //23
}
console.log(four); // 4
console.log(twoThree); // 2323

// Closures

function outerFunc() {
  let count = 0;
  return function innerFunc() {
    count++;
    console.log("Count:", count);
  };
}
let countingThing = outerFunc(); // is called, returns innerFunc()
// Inner still remembers, count - closure thing!

//The JS engine keeps the count variable alive in memory inside a “closure scope”.

countingThing();
countingThing();
countingThing();
function whole() {
  let ten = 10;
  function xyz() {
    let seven = 7;
    function abc() {
      console.log(seven, ten);
    }
    abc();
  }
  xyz();
}
whole();
// closure example when interviewer wants us to use only var

for (var i = 1; i<=6; i++){
 function close (num){
  setTimeout(()=>{
   //console.log(num)
  }, i * 1000)
 }
 close(i)
}

// real world case 
function bankAccount (){
 let balance = 9999
 return {
  debited: function(amount){
   balance -= amount
   console.log('Debited:', amount )
  },
  checkBalance: function (){
   console.log('Balance:', balance)
  }, 
  credited: function(amount){
   balance += amount 
   console.log('Your account has been credited with:', amount)
  }
  
 }
}
const account = bankAccount()
account.debited(909) // -900 i.e, 9090
console.log(account.balance) // undefined, cant directly access - encapsulation, keeps var balance pvt
account.credited(10) // +10 i.e, 9100
account.checkBalance() // 9100

// ReUsabale-can create multiple products, each with their own balance

const sashanksAccount = bankAccount()
const shammisAccount = bankAccount()

sashanksAccount.debited(100)
sashanksAccount.checkBalance()
shammisAccount.credited(100)
shammisAccount.checkBalance()
//Each account is independent, thanks to block scope + closures.


