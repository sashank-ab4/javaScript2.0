//PROMISES

const GITHUB_API = "https://api.github.com/users/sashank-ab4";

const user = fetch(GITHUB_API);
console.log(user);

// fetch()

/* const fetchingPromise = fetch('https://jsonplaceholder.typicode.com/users')
console.log(fetchingPromise)

fetchingPromise.then((response)=>{
  console.log(`Response Received: ${response.status}`)
})

console.log('Started Request...') 

*1 calling the fetch() API, and assigning the return value to the fetchPromise variable
*2 immediately after, logging the fetchPromise variable. This should output something like: Promise { <state>: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.
*3 passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
*4 logging a message that we have started the request.



*/

//chaining promises or promise chaining.

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
console.log(fetchPromise);

fetchPromise.then((response) => {
  const jsonPromise = response.json(); // convert JSON response
  jsonPromise.then((data) => {
    console.log(data[1].address.street);
    jsonPromise.then((data) => {
      console.log(data[2].name);
    });
  });
});

// In this example, as before, we add a then() handler to the promise returned by fetch(). But this time, our handler calls response.json(), and then passes a new then() handler into the promise returned by response.json().

//creating a promise
const promise = new Promise((resolve, reject) => {
  let success = true; // <---async operation/logic of handling.
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Something went wrong....");
    }
  }, 3000);
});

console.log(promise);

/* 
new Promise(...) creates a Promise object
Inside, the setTimeout simulates a delay (like fetching data)
If success === true, it calls resolve(...)
If false, it calls reject(...)
*/

const cart = ["Shirt", "Polo", "Watch", "Shoe", "Resistance Band"];

const nayaPromise = createOrder(cart);
console.log(nayaPromise);
//consumer part
nayaPromise
  .then((orderId) => {
    console.log(orderId);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Add More Items...");
  });

//Producer Part

function createOrder(cart) {
  const promise1 = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject("Cart is not valid..");
    }
    const orderId = "9951702567";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });

  return promise1;
}

function validateCart() {
  return false;
}

// realistic use case: simulated login

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "endofsort" && password === "preload") {
        resolve("Login Successfull");
      } else {
        reject("Invalid Credentials");
      }
    }, 2000);
  });
}

console.log(loginUser("endofsort", "preload"));

//Promise API's
//Promise.all()
//if all fulfills
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results);
});

const promOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("One");
  }, 3000);
});
const promTwo = new Promise((resolve, reject) => {
  //setTimeout(()=>{resolve('Prom2 is Success')}, 1000)
  setTimeout(() => {
    reject("Two");
  }, 5000);
});
const promThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Three");
  }, 2000);
});

 Promise.all([promOne, promTwo, promThree])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.allSettled([promOne, promTwo, promThree]) // safe option
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });

  Promise.race([promOne,promTwo,promThree]).then((results) => {
    console.log(results);
  }).catch((err) => {
    console.error(err);
  }) 

  Promise.any([promOne,promTwo,promThree]).then((results) => {
    console.log(results);
  }).catch((err) => {
    console.error(err);
    console.error(err.errors);
  })

// if one fails & promise.allSettled()
const p4 = Promise.resolve(4);
const p5 = Promise.reject("Error");
const p6 = Promise.resolve(6);
Promise.allSettled([p4, p5, p6]).then((results) => console.log(results)); // output:Error

//Promise.race()

const p7 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow!");
  }, 3000);
});
const p8 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast!");
  }, 1500); // -- it is settling first
});

Promise.race([p7, p8]).then((results) => {
  console.log(results);
}); // fast!

//Promise.any()

const p9 = Promise.reject("Fail 1");
const p10 = Promise.resolve("Success 2");
const p11 = Promise.resolve("Success 3");

Promise.any([p9, p10, p11]).then((value) => {
  console.log(value);
});
