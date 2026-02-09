class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(`${this.name} has logged in`);
    }
    logout() {
        console.log(`${this.name} has logged out`);
    }
}
class Teacher extends User {
    constructor(name, email, password) {
        super(name, email);
        this.password = password;
    }
    resetPassword() {
        console.log(`${this.name} has reset the password`);
    }

    addCourse() {
        console.log(`${this.name} has added a course`);
    }

    

}

const show = new Teacher("dharmy", "dharmy@example.com", "12345");
show.addCourse();
show.login();
show.resetPassword();
console.log(show);

const againShow = new User("priy")
againShow.login()

console.log(User === Teacher);
console.log(show instanceof Teacher);
console.log(show instanceof User);
