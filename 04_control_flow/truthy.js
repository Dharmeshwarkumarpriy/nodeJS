let userEmail="" // falsy value // truthy value // " 
if(userEmail){ // check truthy value // falsy value
    console.log("got user email"); // truthy value
}else{
    console.log("don't have user email"); // falsy value
}

// falsy values...
// FALSE, 0, -0, bigInt 0n, "", null, undefined, NaN
// TRUTHY VALUE
//  "0", 'false', " ", [], {}, function(){}

if(userEmail.length===0){ // check empty string // falsy value
    console.log("array is empty"); // falsy value
}

const emptyObj = {} // truthy value
if(Object.keys(emptyObj).length===0){ // check empty object // truthy value
    console.log("Object is empty"); // truthy value
}

// Nullish coalescing operator (??): null, undefined
// this is use call database...
let vall; // undefined
vall=5 ?? 10 // 5
vall1=null ?? 10 // 10 // it will check next value if first value is null or undefined
var2=undefined ?? 15 // 15 // it will check next value if first value is null or undefined
val3= null ?? 10 ?? 100 // 100 // it will check next value if first value is null or undefined
console.log(vall); // 5 // it will print first value because its not null or undefined
console.log(vall1); // 10 // it will print second value because first value is null
console.log(var2); // 15 // it will print second value because first value is undefined
console.log(val3); // 10 // it will print second value because first value is null

// terniary operator...
// condition ? true: false
const iceTeaPrice=100 // price of ice tea // 100
iceTeaPrice <= 80 ? console.log("less then 80"): console.log("more then 80") // more then 80

const iceTeaPrice1=50 // price of ice tea // 50
iceTeaPrice1 <= 80 ? console.log("less then 80"): console.log("more then 80") // less then 80