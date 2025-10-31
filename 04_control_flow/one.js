if(true){ // always true condition 
    console.log("if true") // will be executed 
}
else{ // always false condition // will not be executed
    console.log("if false") // will not be executed
}
if(2==2){ // true condition
    console.log("2 is equal to 2") // will be executed

}

const isUserloggedIn=true // true condition // will be executed
if(isUserloggedIn){ // true condition
    console.log("user is logged in") // will be executed

}

if(2=="2"){ // true condition because == checks value only
    console.log("2 is equal to '2'") // will be executed
    console.log("executed");
}



// <, >, <=, >=, ==, !=, ===, !==
const temperature=41 // current temperature 
if(temperature<50){ // check if temperature is less than 50
    console.log("less then 50"); // will be executed
}else{
    console.log("temp is greater then 50"); // will not be executed
    }

if(temperature===40){ // check if temperature is exactly equal to 40 
    console.log("less then 40"); // will not be executed
}else{
    console.log("temp is greater then 40"); // will be executed
}

// scope related... 
const score=200 // user score // global scope // accessible everywhere 
if(score>100){ // check if score is greater than 100 // true condition // will be executed
    const power='fly' // block scope // accessible only inside this if block // not accessible outside this block
    console.log(`user power: ${power}`); // will be executed
}
// console.log(`user power: ${power}`); // error power is not defined because not call vallue other side...

const balance = 1000 // user balance // global scope // accessible everywhere 
if(balance>500) console.log("test"), // implisite scope...// only one statement is allowed without block scope
console.log("test2"); // this will be executed always because not part of if block...

if(balance<500){ // false condition
    console.log("less then");
}else if(balance<750){ // false condition
    console.log("less than 500");
}else if(balance<900){// false condition
    console.log("less than 900");
}else{ // all above conditions are false
    console.log("less then 1200"); // will be executed
}

const UserloggedIn=true // user logged in status // global scope // accessible everywhere
const debit_Card=true // user has debit card // global scope // accessible everywhere
if(UserloggedIn && debit_Card && 2==3){ // check if user is logged in and has debit card // false condition because 2==3 is false
    console.log("allow to buy course"); // will not be executed
}

const logedInFromGoogle=false // user logged in from google // global scope // accessible everywhere
const logedInFromEmail=true // user logged in from email // global scope // accessible everywhere
if(logedInFromEmail || logedInFromGoogle){ // check if user is logged in from email or google // true condition because logedInFromEmail is true
    console.log("user logged in");
}else{
    console.log("sorry"); // will be executed
}