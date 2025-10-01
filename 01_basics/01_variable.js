const accountId=12345;
let accountEmail="dkpriy8@gmail.com"
var accountPassword="12345"
accountCity="Bangalore"
let accountState;  // we can declare variable without assigning value


//accountId=23456;   // we cannot change the value of const variableoz
 console.log(accountId);

accountEmail="p@gimal.com"  // we can change the value of let variable
console.log(accountEmail);
accountPassword="67890"  // we can change the value of var variable
console.log(accountPassword);
accountCity="Mumbai"  // we can change the value of variable without var,let,const
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity]);    

/*
prefer not to use var 
beacause of issue in block scope and function scope
use let and const.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);