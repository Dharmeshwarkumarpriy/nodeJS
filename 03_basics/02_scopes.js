// let a =10 // global scope..
// const b =20 // block scope..
var c =30 // global scope..

if (true){
    let a =40 // block scope..
    var c =50 // global scope..
    const b=60 // block scope..
    console.log("inner", a); // value of a is 40 // block scope.. 
    console.log("inner", b); // value of b is 60 // block scope..
}

for(let i=0; i< Array.length; i++){
    const element=array[i];

}

// console.log("value of a is", a); // value of a is 10 // global scope.. 
// console.log("value of b is", b); // value of b is 20 // block scope.. 

console.log("value of c is", c); // value of c is 30 // global scope..

