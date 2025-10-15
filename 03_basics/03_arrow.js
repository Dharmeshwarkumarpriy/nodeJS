const user={
    userName:"dharmy",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
    }
}

user.welcomeMessage()
user.userName="sam"
user.welcomeMessage()