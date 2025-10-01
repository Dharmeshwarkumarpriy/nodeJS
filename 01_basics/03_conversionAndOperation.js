let score ="33"
let check="88da"
let show=null
let define=undefined
let bool=true

console.log(typeof score);
console.log(typeof(score));
let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(check);
console.log(show);
console.log(undefined);
console.log(bool);

//"33" => 33
// true => 1; false=> 0

let isLoggedIn =0
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => flase
// "dharmy" => true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **********Operation ***************

let value =3
let negValue=-value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);

let str1 ="hello"
let str2="dharmy"
let str3=str1+str2
console.log(str3);
console.log("1" +2);
console.log(1+ "2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(3+4*5/3); //it is not mendetary write this code orgrenigaton level.
console.log(true);
console.log(+"");

let num1, num2, num3
num1=num2=num3=2+2


let gameCOunter=100
gameCOunter++;
console.log(gameCOunter);

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"