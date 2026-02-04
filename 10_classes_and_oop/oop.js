const User={
    userName: "dharmy",
    LoginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("get user details from database");

        console.log("print username...");
        console.log(`username: ${this.userName}`);
        
        console.log("print all constant...");
        console.log(this);
        

    }
}

console.log(User.userName);
console.log(User.getUserDetails())

console.log("globle print all constant...");
console.log(this);


function user(username, Logincount, isloggedin) {
    this.Logincount=Logincount;
    this.username=username;
    this.isloggedin=isloggedin;

    this.greeting=function () {
        console.log(`welcome ${this.username}`);
        
    }

    return this;
}

const userOne=user("priy",2,true)
const userTwo=user("dharmy..",43,false)
// create object, call constructor key word, this key word inject orgument, call arg by in fun....
const userOne1=new user("priy",2,true)
const userTwo1=new user("dharmy..",43,false)

console.log(userOne);
console.log(userTwo);

console.log(userOne1);
console.log(userTwo1);

console.log(userOne.constructor);
console.log(userOne1.constructor);
