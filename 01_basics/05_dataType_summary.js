// primetive

// 7 type : string, number, boolean, null, undefined, symbol,bigInt

// reference (Non primitive)
// array, objects, functions

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null // object type..
let userEmail;
let useId=undefined
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
//const bigNumber=34354454334433443n

const heros=["shaktiman","naagraj","doga"] // obeject type..
let myObj={
    name:'dhrmay',
    age: 22,


}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber); // undifine
console.log(typeof outsideTemp); // object
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof anotherId); // symbol

// **************************************************

//stack (primitive), heap (non-primitive)

let muyoutubeName="dharam.com"

let anotherName=muyoutubeName
anotherName="priye"

console.log(muyoutubeName);
console.log(anotherName);

let userOne={
    email: "user@goole.com",
    pass: "d@ioo"
    

}

let userTwo=userOne
userTwo.email="dharam.com"
console.log(userOne.email);
console.log(userTwo.email);