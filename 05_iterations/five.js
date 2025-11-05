const coding =["js","python","c++","java","ruby"] // array of strings..
// for(const code of coding){ // for...of loop..
//     console.log(`I love ${code}`) // I love js // I love python // I love c++ // I love java // I love ruby //
// }
// // --- IGNORE ---
// coding.forEach(function (item){

// })

console.log("val..."); // val... // js // python // c++ // java // ruby //
coding.forEach(function (val){ // anonymous function.. 
    console.log(val); // js // python // c++ // java // ruby //
})

console.log("item..."); // item...
coding.forEach( (item) => { // arrow function.. /
    console.log(item); // js // python // c++ // java // ruby //
})

console.log("printMe item..."); // printMe item...
function printMe(item){ // normal function..
    console.log(item); // js // python // c++ // java // ruby //
}
coding.forEach(printMe) // calling function..

console.log("item index array..."); // item index array...
coding.forEach((item, index, arr)=>{ // arrow function with 3 parameters..
    console.log(item, index, arr); // js 0 [...] // python 1 [...] // c++ 2 [...] // java 3 [...] // ruby 4 [...]
})

console.log('"object..."'); // "object..."
const myCoding=[ // array of objects..
    {
        languageName: "javaScript", // object 1..
        languageFileName: "js" // object 1..
    },
    {
        languageName: "java",
        languageFileName: "java"// object 2..
    },
    {
        languageName: "python", // object 3..
        languageFileName: "py"
    }
] // end of array of objects..
myCoding.forEach((item)=>{ // iterating array of objects..
    console.log(item.languageName); // javaScript // java // python //
}) // end of forEach..