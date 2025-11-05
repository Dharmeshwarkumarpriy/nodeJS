const coding =["js","python","c++","java","ruby"] // array of strings..
// for(const code of coding){ // for...of loop..
//     console.log(`I love ${code}`) // I love js // I love python // I love c++ // I love java // I love ruby //
// }
// // --- IGNORE ---
// coding.forEach(function (item){

// })

console.log("val...");
coding.forEach(function (val){
    console.log(val);
})

console.log("item...");
coding.forEach( (item) => {
    console.log(item);
})

console.log("printMe item...");
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

console.log("item index array...");
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

console.log('"object..."');
const myCoding=[
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})