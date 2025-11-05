// for of

// ["","",""];
// [{},{},{}]

const arr =[1,2,3,4,5] // iterable

for (const num of arr) { // num = arr[0], arr[1]
    console.log(num);
}

const greetings="hello world!" // iterable string
for (const greet of greetings) { // greet= greetings[0], greetings[1]
    console.log('each char is: ',greet); // h e l l o   w o r l d !
}

// maps

const map=new Map() // iterable key-value pairs / 
map.set('IN',"india") // key-value pair
map.set('USA','united states of america')
map.set('Fr','France')
map.set('IN',"india")
console.log(map);

for (const [key, value] of map) { // destructuring assignment 
    console.log(key, ':-', value); // IN :- india // USA :- united states of america // Fr :- France //
}

const myObject={'game1':'NFS', // non-iterable object
    'game2':'spiderman' // key-value pairs
}

// for (const [key] of myObject) {       // error: myObject is not iterable
//     console.log(key, ':-', value);    // IN :- india // USA :- united states of america // Fr :- France //
// }