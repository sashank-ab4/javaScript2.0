let arrOne = ["proggrammer"];
let arrTwo = ["megapixels"];

let charsOne = arrOne[0].split("");
let charsTwo = arrTwo[0].split("");

let commonLetters = [
  ...new Set(
    charsOne.filter((char) => {
      return charsTwo.includes(char);
    })
  ),
];

console.log(commonLetters); //['p', 'g', 'a', 'm', 'e']
