//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedin = false

// console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            name: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
 
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const user = [
    {
        id : 1,
        email : "ggmail.com"
    },
    {
        id : 1,
        email : "gmail.com"
    },
    {
        id : 1,
        email : "gmail.com"
    },
]

user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindhi",
    price : "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor:instructor} = course

// console.log(ourseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]