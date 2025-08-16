function a() {
  b();
}
function b() {
  console.log("Sashank");
}
a();

// SetTimeout
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 6000);

console.log("End");
//callback queue
document.getElementById("btn").addEventListener("click", () => {
  console.log("Clicked");
});

/*JS sets up listener and finishes loading

 You click → browser captures it

 Browser sends your function to the Callback Queue

 Event loop checks: “Is the stack empty?” Yes!

 Executes console.log("Clicked") */

//Microtask queue
console.log("Hey, Hi");
setTimeout(() => {
  console.log("Then, I am Second :(");
}, 5000);

Promise.resolve().then(() => {
  console.log("I am First :)"); //<<-- high priority
});

console.log("Hey, Bye!");

// process
Promise.resolve().then(() => console.log("P"));
setTimeout(() => console.log("T"), 0);

console.log("S");
/* S from synchronous
P from microtask
T from callback queue */

// callback functions
function greet(name, cb) {
  cb(name);
}

greet("Tyrion", (n) => console.log(`Hello, ${n}`));

function bravos(character, cb1) {
  console.log("Hi " + character);
  cb1();
}
bravos("Arya", () => {
  console.log("Valar Mogghulis");
});

// callback hell:Pyramid of Doom
setTimeout(()=>{console.log('1st Task');
  setTimeout(()=>{console.log('2nd Task');
    setTimeout(()=>{console.log('3rd Task')
    },1000)
  },1000)
},1000)

