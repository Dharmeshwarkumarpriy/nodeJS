function multipleBy5(num) { // function object
    return num*5 // return value
}

multipleBy5.power=2 // add property to function object

console.log(multipleBy5(5)); // call function
console.log(multipleBy5.power); // access property
console.log(multipleBy5.prototype); // access prototype property

function createUser(username,score) { // constructor function
    this.username=username // this keyword
    this.score=score // this keyword
}

createUser.prototype.increment=function() { // method
    this.score++ // access property
}

createUser.prototype.printMe=function () { // method
    console.log(`score is ${this.score}`); // access property
    
}
const chai=new createUser("chai",23) // create object
const tea = createUser("tea",234) // create object without new keyword
chai.printMe() // call method