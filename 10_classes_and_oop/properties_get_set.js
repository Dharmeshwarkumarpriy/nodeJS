function User(email, password){
    this._email=email;
    this._password=password;

    Object.defineProperties(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
    Object.defineProperties(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password=value
        }
    })
}

const show = new User("email.com",'PAS#90')
console.log(show.email);