// ES6
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        console.log("encrypting password");
        return `${this.password}***encrypted***`;
    }
    changeUsername() {
        return `${this.name.toUpperCase()}_new`;
    }

}
const show =new User("dharmy", "dharmy@example.com", "12345");
console.log(show.encryptPassword());
console.log(show.changeUsername());

// behind the seene 

function Users(name,email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}
Users.prototype.encryptPassword = function () {
    console.log("encrypting password");
    return `${this.password}***encrypted***`;
}

Users.prototype.changeUsername = function () {
    return `${this.name.toUpperCase()}`;
}

const see =new Users("dharmy", "dharmy@example.com", "12345");
console.log(see.encryptPassword());
console.log(see.changeUsername());
