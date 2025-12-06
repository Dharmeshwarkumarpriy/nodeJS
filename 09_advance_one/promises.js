// fetch('https://somthing.com').then().catch().finally()
const promisesOne=new Promise(function(resolve, reject){
    // do an async task
    // db calls cryptography, network
    setTimeout(function(){
        console.log("async task is compelete");
        resolve()
    },1000)
})
promisesOne.then(function(){
    console.log("promise consumed");    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promisesThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'what why word', email:'what@example.com'})
    },1000)
})
promisesThree.then(function(user){
    console.log(user);    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
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
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})
//console.log(username);
