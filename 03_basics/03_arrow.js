const user={
    userName:"dharmy",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.userName="sam"
user.welcomeMessage()

console.log(this);


function one(){
    let userName="dhamry"
    console.log(this);
}

function one1(){
    let userName="dhamry"
    console.log(this.userName);
}

const two=function(){
    let uName="priy"
    console.log(this.uName);
}

one()

one1()

two()

const two1= () =>{
    let uName="priy"
    console.log(this.uName);
}

const two2= () =>{
    let uName="priy"
    console.log(this);
}

two1()

two2()

const addTwo=(number1, number2) => {
    return number1 +number2
}
console.log(addTwo(3,4));

const addTwo1=(number1, number2) => number1 + number2
console.log(addTwo1(3,4));

const addTwo2=(number1, number2) => (number1 + number2)
console.log(addTwo2(3,4));

const addTwo3=(number1, number2) => ({user:"babu"})
console.log(addTwo3());
console.log(addTwo3(3,4));

const myArray=[2,3,4,5,6]
myArray.forEach(function (){})
myArray.forEach(() => {})
myArray.forEach(() => ({}))