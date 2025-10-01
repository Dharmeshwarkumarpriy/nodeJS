const name="dharam"
const repoCount=50

console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String("dharamy-uiu-hkj");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString= gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,5)
console.log(anotherString);

const newStringOne="   dhamey   "
console.log(newStringOne.trim());

const url="https://damry.com/damry%20priy"
console.log(url.replace('%20','-'))
console.log(url.includes('damry'))

console.log(gameName.split('-'));
console.log(gameName.blink());
console.log(newStringOne.blink());
console.log(gameName.bold())
console.log(gameName.codePointAt())

console.log(gameName.charCodeAt());
console.log(gameName.constructor());
console.log(gameName.endsWith());
console.log(gameName.fixed());
console.log(gameName.fontcolor());