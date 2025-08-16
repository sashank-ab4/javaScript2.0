// project:Fetch Multiple APIs Together
const apiOne = 'https://jsonplaceholder.typicode.com/users'
const apiTwo = 'https://jsonplaceholder.typicode.com/posts'
const apiThree = 'https://jsonplaceholder.typicode.com/comments'

Promise.all([
 fetch(apiOne).then(resolve=>resolve.json()),
  fetch(apiTwo).then(resolve=>resolve.json()),
  fetch(apiThree).then(resolve=>resolve.json())
])
.then(([users, posts, comments])=>{
const usersWithAge = users.map(user => ({
    ...user,
    age: Math.floor(Math.random() * 50) + 18  // random age between 18 and 67
  }));
    // 🎯 Filter users older than 30
  const above30 = usersWithAge.filter(user => user.age > 30);

//console.log('All Users with Age:', usersWithAge)
console.log('Users above 30:', above30)

})
.catch((err)=>{console.error('One of the requests failed :', err)})