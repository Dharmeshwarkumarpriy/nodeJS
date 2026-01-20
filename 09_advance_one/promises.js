// fetch('https://somthing.com').then().catch().finally()
const promisesOne=new Promise(function(resolve, reject){
    // do an async task
    // db calls cryptography, network
    setTimeout(function(){ // async work is completed
        console.log("async task is compelete");
        resolve() // task success
        //reject() // task failed
    },1000)
})
promisesOne.then(function(){ // promise consumed
    console.log("promise consumed");    
})

new Promise(function(resolve, reject){ // async work
    setTimeout(function(){ // async work is completed
        console.log("async task 2");
        resolve()
    },1000) // async work done
}).then(function(){ // promise consumed
    console.log("async 2 resolved"); // then run after resolve
})

const promisesThree = new Promise(function(resolve,reject){ // async work
    setTimeout(function(){ // async work is completed
        resolve({username:'what why word', email:'what@example.com'}) // task success
    },1000)
})
promisesThree.then(function(user){
    console.log(user);    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){ // async work is completed
        let error = true // change to false to see resolve
        if(!error){
            resolve({username: "dharma", password:'123'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { // chaining
    console.log(username);
    
}).catch(function(error){ // catch the error
    console.log(error);
    
}).finally(() => console.log("the promise is either resolved or rejected")) // finally always runs


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){ // async work is completed
        let error= true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
}); // promise created

async function consumePromiseFive(){ // async function

    try {
        const response = await promiseFive // wait for promise to resolve/reject
        console.log(response);
    } catch (error) {
        console.log(error);        
    }
}
consumePromiseFive() // call the async function


async function getAllUser() { // async function
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // wait for fetch to complete
        const data = await response.json() // wait for json parsing
        console.log(data);
//        console.log(response);        
    } catch (error) {
        console.log("e:",error);        
    }    
}
getAllUser() // call the async function


fetch('https://jsonplaceholder.typicode.com/users') // fetch api
.then((response) => { // wait for fetch to complete
    return response.json() // parse json
}) // wait for json parsing
.then((data) => { // get the data
    console.log(data);
    
})
.catch((error) => console.log(error)) // catch any error

//console.log(username);