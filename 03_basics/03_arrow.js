const user={ // object literal / object defined using {} / object created using {}
    userName:"dharmy", // key:value pair / property / attribute / field / member / data member / instance variable
    price:999, // key:value pair / property / attribute / field / member / data member / instance variable

    welcomeMessage: function(){ // method / member function / function inside object / behavior / action / operation
        console.log(`${this.userName} , welcome to website`); // template literal / template string / string interpolation / string formatting
        console.log(this); // this refers to the object that is calling the method / function / behavior / action / operation
    }// method / member function / function inside object / behavior / action / operation
}

user.welcomeMessage() // calling the method / invoking the method / executing the method / method invocation
user.userName="sam"// updating the property / attribute / field / member / data member / instance variable
user.welcomeMessage()// calling the method / invoking the method / executing the method / method invocation

console.log(this); // this refers to the global object / window object / globalThis object in browser / global object in Node.js


function one(){ // function declaration / function definition
    let userName="dhamry" // local variable / function scope variable / block scope variable
    console.log(this);  // this refers to the global object / window object / globalThis object in browser / global object in Node.js
    // console.log(this.userName); // undefined/ not defined
}

function one1(){ // function declaration / function definition /
    let userName="dhamry" // local variable / function scope variable / block scope variable
    console.log(this.userName); // undefined/ not defined
}

const two=function(){ // function expression / anonymous function / function assigned to variable
    let uName="priy" // local variable / function scope variable / block scope variable /
    console.log(this.uName); // this refers to the global object / window object / globalThis object in browser / global object in Node.js
}

one() // calling the function / invoking the function / executing the function / function invocation

one1() // calling the function / invoking the function / executing the function / function invocation

two()

const two1= () =>{ // arrow function / fat arrow function / lambda function / function assigned to variable
    // arrow functions do not have their own 'this' context / lexical 'this' / inherit 'this' from the surrounding scope
    let uName="priy" // local variable / function scope variable / block scope variable /
    console.log(this.uName); // this refers to the global object / window object / globalThis object in browser / global object in Node.js
}

const two2= () =>{ // arrow function / fat arrow function / lambda function / function assigned to variable
    // arrow functions do not have their own 'this' context / lexical 'this' / inherit 'this' from the surrounding scope
    let uName="priy"    // local variable / function scope variable / block scope variable /
    console.log(this);// this refers to the global object / window object / globalThis object in browser / global object in Node.js
}

two1()

two2()

const addTwo=(number1, number2) => { // arrow function / fat arrow function / lambda function / function assigned to variable
    // function body / function implementation
    return number1 +number2 // return statement / returning value from function /   returning result from function
}
console.log(addTwo(3,4)); // calling the function / invoking the function / executing the function / function invocation

const addTwo1=(number1, number2) => number1 + number2 // arrow function with implicit return / concise body syntax
console.log(addTwo1(3,4)); // calling the function / invoking the function / executing the function / function invocation

const addTwo2=(number1, number2) => (number1 + number2) // arrow function with implicit return / concise body syntax
console.log(addTwo2(3,4)); // calling the function / invoking the function / executing the function / function invocation

const addTwo3=(number1, number2) => ({user:"babu"}) // arrow function returning object literal / concise body syntax
console.log(addTwo3()); // calling the function / invoking the function / executing the function / function invocation
console.log(addTwo3(3,4)); // calling the function / invoking the function / executing the function / function invocation

const myArray=[2,3,4,5,6] // array literal / array defined using [] / array created using []
myArray.forEach(function (){}) // function expression / anonymous function / function assigned to variable
myArray.forEach(() => {}) // arrow function / fat arrow function / lambda function / function assigned to variable
myArray.forEach(() => ({}))     // arrow function returning object literal / concise body syntax / function assigned to variable