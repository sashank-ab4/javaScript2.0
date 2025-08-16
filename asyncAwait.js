// Async & Await
// async:
/* async function getData() {
  return "IVAR";
} // always returns a promise!

let dataPromise = getData();
console.log(dataPromise);
// Same as: Promise.resolve("IVAR")

dataPromise.then((res)=>{console.log(res)})
//this thing, promise just give/return value but not a promise */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("5 Seconds!");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("10 Seconds!");
  }, 10000);
});

async function myFunction() {
  try {
    // console.log("I am Quick you know!");
    const val = await p1;
    //console.log(val);
    //console.log("Hey Ivar!");
    const val2 = await p2;
    //console.log(val2);
    //console.log("Hey Ragnar!");
  } catch (error) {
    console.log("Error:", error);
  }
}

myFunction();
//console.log("📣 I run outside the async function!");

/* function myPromiseFunction(){
  //JS Engine will not wait for promise to be resolved in this case
  p1.then((res)=>console.log(res)) //#2 after given time
  console.log('Bye Ivar!') //#1
} 

myPromiseFunction() */

// real world case #1- example using fetch with async and await

const API_URL = "https://api.github.com/users/sashank-ab4";

async function gitData() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  //console.log(jsonValue);
}

gitData();

// #2

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    //users is an array, not an object, for fix ->Loop or map over the array

    users.forEach((user) => {
      //console.log(user.name);
    });

    users.map((user, mail) => {
      //console.log('User name:',user.username, '', 'email:', user.email);
    });

  //.name is on each item inside array
  //so Usec user.name inside .map() or loop
  } catch (err) {
    console.error("Failed to Fetch users", err);
  }
}
fetchUsers();

// #3- Simulated eCommerce Flow

async function placeOrder (){
  function wait (milliseconds){
    return new Promise((resolve)=>setTimeout(resolve, milliseconds))
  } 
  try{
    console.log('Adding to cart...')
    await wait(1000)
    console.log('Processing payment...')
    await wait(2000)
    console.log('Payment Successfull!')
    await wait(3000)
    console.log('Item Shipped...')
    await wait(4000)
    console.log('Dispatched.')
    await wait(5000)
    console.log('Delivered!')
    await wait(6000)

  } catch (e){console.log('Order Failed:', e)}
}
placeOrder();

