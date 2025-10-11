// const tinderUser= new Object() // object constructor..
const tinderUser={}

tinderUser.id="12345" // add key value..
tinderUser.isLoggedIn=false // update value..
tinderUser.name="dharmy" // delete key value..

 console.log(tinderUser); // {age: 18, isLoggedIn: false, id: '12345'}

const regularUser={
    email:"sam@gmail.com",
    fullname:{
        userFullname:{
            firstName:"sam",
            lastName:"sir"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName); // sam // accessing object value..
const obj1={1:"a",2:"b"} // key is number..
const obj2={3:"c",4:"d"} // key is number..
const obj5={5:"e",6:"f"} // key is number..

const obj3={obj1,obj2} // merge two object.. but not as expected..
console.log(obj3); // {obj1: {…}, obj2: {…}} // {1: 'a', 2: 'b', 3: 'c', 4: 'd'} 
const obj4=Object.assign({},obj1,obj2,obj5) // merge two object.. but obj1 is updated..
console.log(obj4); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
const obj6={...obj1,...obj2} // merge two object.. spread operator..
console.log(obj6); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

const users=[
    id=1,
    name="dharmy",
    email="d@gamil.com"
]
users[1].email // accessing array of object..
console.log(tinderUser); // {age: 18, isLoggedIn: false, id: '12345'} 
console.log(Object.keys(tinderUser)); // ['age', 'isLoggedIn', 'id'] // return array of key..
console.log(Object.values(tinderUser)); // [18, false, '12345'] // return array of value..
console.log(Object.entries(tinderUser)); // [['age', 18], ['isLoggedIn', false], ['id', '12345']] // return array of array..

// Related portions of 02_basics/04_objects.js:

console.log(tinderUser.hasOwnProperty("age")); // true // check key is present or not..
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true // check key is present or not..

const course={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"dharmy"
}
course.courseInstructor // access object value..
const {courseInstructor}=course // object destructuring..
const {courseInstructor:instructor}=course // object destructuring..
console.log(courseInstructor); // dharmy // access object value..
console.log(instructor); // dharmy // access object value..

// {
//     "name"="dharmy",
//     "age"=18,
//     "course"="js in hindi",
//     "price"=999
// }

[
    {},{},{}
]