// 1st Method (modern way)
console.log(document.querySelector("#heading"));

//2nd method

console.log(document.getElementsByTagName("h2"));

//Add event listeners
/* let button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("You clicked me!");
}); */

// Create and add elements

let newHeading = document.createElement("h2");
newHeading.innerText = "Aegon Targaeryan";
document.body.appendChild(newHeading);

// changing content
document.querySelector("#heading").innerHTML = "Lord Commander Jon Snow!";

// Changing Styles
document.querySelector('#heading').style.backgroundColor = 'green'

// exercise 

document.querySelector("#call").addEventListener("click", function () {
  document.getElementById("hero").innerText = "And now my watch begins.";
});
// classlist - add, toggle, remove
function toggleSideBar (){
document.querySelector('body').classList.toggle('open')
}
