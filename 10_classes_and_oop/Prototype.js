let myName="dhamry     " // prototype of string
console.log(myName.length); // length is property of string prototype
console.log(myName.truelength); // truelength is method of string prototype

let myHeros=["shaktiman","nagraj","doga"] // prototype of array

let heroPower={ // prototype of object
    shaktiman:"speed",
    nagraj:8000,
    doga:7000,

    getShaktimanPower:function () { // method in object prototype
        console.log(`shaktiman power is ${this.shaktiman}`); // accessing property of object
    }
}

Object.prototype.dharmy=function () { // adding method to object prototype
    console.log("dharmy is present in all objects"); // this method will be available to all objects
}

Array.prototype.heyDharmy=function () { // adding method to array prototype
    console.log("dharmy says hey..."); // this method will be available to all arrays
}


myHeros.dharmy()
heroPower.dharmy() // method available to all objects   
myHeros.heyDharmy()

// heroPower.heyDharmy()

// inheritance in prototype
const User={
    name: "dharmy", // property of User prototype
    email: "dharmy@gmail.com"
}
const Teacher={
    makeVideos: true // property of Teacher prototype
}
const TeachingrSupport={ // prototype of TeacherSupport
    isAvailable: false
}

const TASupport={ // prototype of TASupport
    makeAssignment: 'JS assignment', // property of TASupport prototype
    fullTime: true,
    __proto__: TeachingrSupport // setting prototype of TASupport to TeacherSupport
}

Teacher.__proto__=User// setting prototype of Teacher to User
// TeacherSupport.__proto__=User

// modern syntax...
Object.setPrototypeOf(TeachingrSupport, Teacher) // setting prototype of TeacherSupport to Teacher

let anotherUsername= "priyDhamry    "
String.prototype.truelength=function () { // adding method to string prototype
    console.log(`${this}`);
    
    console.log(`true length is: ${this.trim().length}`); // this will refer to the string on which method is called
}

anotherUsername.truelength() // calling the method on string
"dharmy    ".truelength() // calling the method on string
"iceTea".truelength()