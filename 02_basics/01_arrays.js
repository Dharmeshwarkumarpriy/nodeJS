// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // [1,2,3,4,5] ...

// Array methods ...

// myArr.push(6) // [1,2,3,4,5,6] ...
// myArr.push(7) // [1,2,3,4,5,6,7] ...
// myArr.pop() // [1,2,3,4,5,6] ...

// myArr.unshift(9) // [9,0,1,2,3,4,5] ...
// myArr.shift() // 

// console.log(myArr.includes(9)); // false ...
// console.log(myArr.indexOf(3)); // -1

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); //[0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [1,2]
console.log("B ", myArr); //[0,1,2,3,4,5] // slice value print myArr ...


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // print after remove splice value [0,4,5] ...
console.log(myn2); // print splice value [1,2,3] ...