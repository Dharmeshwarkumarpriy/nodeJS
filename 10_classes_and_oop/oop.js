const User={ /// object literal
    userName: "dharmy",
    LoginCount: 8,
    signedIn: true,

    getUserDetails: function(){ // method
        console.log("get user details from database");

        console.log("print username...");
        console.log(`username: ${this.userName}`); // this key word use to access object property
        
        console.log("print all constant...");
        console.log(this);
        

    }
}

console.log(User.userName);
console.log(User.getUserDetails()) // call method

console.log("globle print all constant..."); // this key word in globle scope
console.log(this); // window object


function user(username, Logincount, isloggedin) { // function declaration 
    this.Logincount=Logincount;
    this.username=username; // this key word
    this.isloggedin=isloggedin;

    this.greeting=function () { // method
        console.log(`welcome ${this.username}`);
        
    }

    return this;
}

const userOne=user("priy",2,true) //
const userTwo=user("dharmy..",43,false)
// create object, call constructor key word, this key word inject orgument, call arg by in fun....
const userOne1=new user("priy",2,true)
const userTwo1=new user("dharmy..",43,false)

console.log(userOne); // print object
console.log(userTwo);

console.log(userOne1);
console.log(userTwo1);

console.log(userOne.constructor); // print function
console.log(userOne1.constructor);
