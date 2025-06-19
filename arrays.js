// ARRAYS
 let starks = ['Lord Eddard', 'Robb Stark', 'Jon Snow', 'Arya Stark'];
 console.log(starks);

 // target the last element of array, best method
 console.log(starks[starks.length - 1])

 // Array Methods
 // Push- adds to end
 starks.unshift('Sansa Stark')
 console.log(starks)

 // .filter()

 let people = [16,17,18,23,25,10,27]
 let adults = people.filter( (element)=>{
  
  if (element >=18){
    return true
  }
 })
 console.log(adults);

 // For Loop in array's

 for (let i=0; i <= people; ++i) {
  console.log(people[i])
 }
// without .filter()
// creating new array
 let teenagers = []
 
 for (let i=0; i < people.length; ++i) {
  // condition for age if its above 18+
  if (people[i] >= 18){
    // adding elements to new array
    teenagers.push(people[i])
  }
 }
 // calling it
 console.log(teenagers)
 
 // .map ()

 let integers = [2,4,6,8,10]
 let roots = integers.map(n=> n * n
 
 )
 console.log(roots)
// without .map () by looping through
let squares = []
for (let i = 0; i < integers.length; ++i){
squares.push(integers[i] * integers[i])
}
console.log (squares)

let targaeryans = ['Aerys', 'Aemon', 'Rhaeghar', 'Daenarys', 'Aegon']

console.log(targaeryans)

targaeryans.push('Drogan')
targaeryans.reverse()