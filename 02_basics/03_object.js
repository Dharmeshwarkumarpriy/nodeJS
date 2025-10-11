// singaltan ...

// object leterals

const mySym=Symbol('mySym')

const jsUser ={
    name:"dharmy",
    "full name":"dharmendra kumar",
    [mySym]: "myvalue",
    age:"18",
    location:"india",
    email:"dk@gmail.com",
    isLoggedIn:true,
    LastLogin: ["monday","saturday"]
}

console.log(jsUser.email); // dot notation..
// console.log(jsUser[email]) // undefined
console.log(jsUser["full name"]) // object key is not valid identifier..
console.log(jsUser[mySym]); // myvalue // symbol key access.. 

jsUser.email="dhamry@gmail.com" // update object.. 

//   Object.freeze(jsUser) // freeze object..

jsUser.email="priy@gmail.com" // not update....
console.log(jsUser);

jsUser.greetings=function(){
    console.log("hello js user"); // method..
}

jsUser.greetingTwo=function(){
    console.log(`hello, ${this.name}`);
} // method..

console.log(jsUser.greetings()); // hello js user // return undefined..

console.log(jsUser.greetingTwo()); // undefined // return nothing..