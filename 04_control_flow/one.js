// if
if(true){
    console.log("if true")
}
else{
    console.log("if false")
}
if(2==2){

}

const isUserloggedIn=true
if(isUserloggedIn){

}

if(2=="2"){
    console.log("executed");
}



// <, >, <=, >=, ==, !=, ===, !==
const temperature=41
if(temperature<50){
    console.log("less then 50");
}else{
    console.log("temp is greater then 50");
    }

if(temperature===40){
    console.log("less then 40");
}else{
    console.log("temp is greater then 40");
}

// scope related... 
const score=200
if(score>100){
    const power='fly'
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); // error power is not defined because not call vallue other side...

const balance = 1000
if(balance>500) console.log("test"), // implisite scope...
console.log("test2");

if(balance<500){
    console.log("less then");
}else if(balance<750){
    console.log("less than 500");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less then 1200");
}

const UserloggedIn=true
const debit_Card=true
if(UserloggedIn && debit_Card && 2==3){
    console.log("allow to buy course");
}

const logedInFromGoogle=false
const logedInFromEmail=true
if(logedInFromEmail || logedInFromGoogle){
    console.log("user logged in");
}else{
    console.log("sorry");
}