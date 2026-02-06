class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }
    get password(){
       // return this._password.toUpperCase()
        return `${this._password}dharmy`.toUpperCase()
    }

    set password(value){
        this._password=value
    }
}

const dharmy =new User("dkpri@gmail.con", "asd")
console.log(dharmy.password);
console.log(dharmy.email);