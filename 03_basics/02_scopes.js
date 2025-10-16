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


// console.log("value of a is", a); // value of a is 10 // global scope.. 
// console.log("value of b is", b); // value of b is 20 // block scope.. 

console.log("value of c is", c); // value of c is 30 // global scope..


function one(){
    const userName="dharmy"
    let Name="priy"

    function two(){
        const website="youtube"
        console.log(userName);
    }
   // console.log(website);
   console.log(Name);
    two()
}
one()
if (true){
    const userName="dharmy"
    if(userName==="dharmy"){
        const website =" youtube"
        console.log(userName+website);
    }
   // console.log(website);
}
//console.log(userName);


//+++++++ interesting ++++++

console.log(addone(5));
function addone(num){
    return num+1
}

// can not access before initialization ...
// console.log(addTwo(5));
const addTwo=function(num){
    return num+2
}

addTwo(5)