// primitive

// 7 types : string , number ,boolean, null , undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const oustsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(anotherId === Id);

// const bigint = 158945659848965265n



// Reference 

// Array , object, Function

const heros = [ shaktiman, nagraj, doga] // array

let myObj = {
    name = "neel"
    age = 25
}

const myFunction = function(){
    // console.log("heloo word");
  }
    
// console.log(typeof score);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap (Non primitive)

let myYoutubename = "hiteshchoudry.com"

let anothername = myYoutubename
anothername = "chai or code"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
  email : "hitesh@gmail.com"
  upi : "upi@ybl"
}

let userTwo = userOne

userTwo.Email = "neel@gamil.com"

console.log(userOne.Email);
console.log(userTwo.Email);

