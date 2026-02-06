function SetUserName(username) {
    // complex DB calls
    this.username=username
    console.log("called");
    
}

function createUser(username, email, password) {
    SetUserName.call(this, username)

    this.email=email
    this.password=password
}

const show =new createUser("dharm","dkpriy@gmail.com","123")
console.log(show);