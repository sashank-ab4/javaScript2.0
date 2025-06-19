let kingdom = [
  {
    houseName: "Stark",
    sigil: "Dire Wolf",
    kingdomName: "North",
    motto: "Winter is comimg!",
    lord: "Lord Eddard Stark",
    capital: "Winterfell",
  },
  {
    houseName: "Baratheon",
    sigil: "Deer",
    kingdomName: "Stormlands",
    motto: "Ours is Fury!",
    lord: "Stannis Baratheon",
    capital: "Storm Island",
  },
];
console.log(kingdom[1].lord);

// adding another house using function,array method.
// creating function
function newHouse(house) {
  // use those parameters to create a user object
  
  kingdom.push(house); // push that into main array, kingdom
}
newHouse({
  houseName: "Lannister",
  sigil:"Lion",
  kingdomName: "Westerlands",
  motto: "Hear me Roar!",
  lord: "Jamie Lannister",
  capital:"Casterly Rock"
}

);

console.log(kingdom);
// Methods (Functions in Objects)
let profile = {
  name: "Arya Stark of Winterfell!",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  } // this.name refers to current object's name.
};

profile.greet();
