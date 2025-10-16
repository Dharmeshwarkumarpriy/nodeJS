

function sayMyName(){ // function declaration..
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H"); // function body..
}

sayMyName() // function call.. // function invocation..

// note ...
        // function addTwoNumbers(number1, number2){

        //     console.log(number1 + number2); // function return value..
        // }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 // function return value..

    console.log("bye bye"); // unreachable code..
}

const result = addTwoNumbers(3, 5) // function return value..

console.log("Result: ", result); // Result: 8 // function return value..


function loginUserMessage(username = "sam"){ // default parameter // sam is overwride ...
    if(!username){ // (username === "") // falsy values.. "", 0, null, undefined, NaN, false..
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // function return value..
}
console.log(loginUserMessage("baboo")) // sam just logged in // function return value..
function loginMessage(uName){
    return `${uName} just logged`
}
console.log(loginMessage("dheeru")) // dheeru just logged // function return value..
console.log(loginMessage("")) // PLease enter a uName // function return value..
console.log(loginMessage()) // sam just logged // function return value..


function calculateCartPrice(val1, val2, ...num1){ // rest parameter.. // ... => spread operator..
    return num1 
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [500, 2000] // rest parameter..
console.log(calculateCartPrice(200, 400, 500, 2000, 6000, 8000)) // [500, 2000, 6000, 8000] // rest parameter..

const user = {
    username: "dharmy",
    price: 199 
}

function handleObject(anyobject){ // object as parameter..
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is 
    // hiteshand price is 199 // object as parameter..
}

handleObject(user) // object as parameter.. // Username is dharmy and price is 199 // object as parameter..
handleObject({ 
    username: "sam",
    price: 399 
}) // object as parameter.. // Username is sam and price is 399 // object as parameter..
// anonymous object.. 


// Related portions of 01_basics/07_arrays.js: ... 
const myNewArray = [200, 400, 100, 600] // array as parameter..
function returnSecondValue(getArray){ // array as parameter.. 
    return getArray[1] // 400 // array as parameter.. 
}

console.log(returnSecondValue(myNewArray)); // 400 // array as parameter.. 
console.log(returnSecondValue([200, 400, 500, 1000])); // 400 // array as parameter.. 
// anonymous array.. // 400 // array as parameter..