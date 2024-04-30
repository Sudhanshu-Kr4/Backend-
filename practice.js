/*
console.log("hello")
const promiseOne = new Promise(function(resolve,reject){
  //asynchronised call
  setTimeout(function(){
    //console.log("Async task is completed")
    // resolve({username: "Chai", email: "chai@example.com"})
    resolve("String is allowed")
  },1000)
})

promiseOne.then(function(abcd){
  console.log(abcd)
})


new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if (!error) {
      resolve({username: "Chai", email: "chai@example.com"})
    } else {
      reject("Error : Something went wrong")
    }
  },1000)
}).then(function(user){
  console.log(user)
  return user.username
}).then
((name) => console.log(name))


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(abcd){
  return abcd.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))

*/


const test = (firstIn) => {
  (secIn) => {
    console.log(firstIn(secIn));
  }
}

test;