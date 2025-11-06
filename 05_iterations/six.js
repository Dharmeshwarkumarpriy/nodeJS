const coding =["js","python","c++","java","ruby"] //.forEach
const values = coding.forEach((item)=>{ //return undefined
    console.log(item);
    return item    //this return will not work
})
console.log(values); //undefined

const myNums=[1,2,3,4,5,6,7,8,9,10] //.filter 
const newNums = myNums.filter((num)=>num>4) //return new array
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

const mynos=[1,2,3,4,5,6,7,8] //.filter with return statement
const newNos= myNums.filter((num)=>{ //return new array
    return num>5 //if true then include in new array
})
console.log(newNos); //[ 6, 7, 8, 9, 10 ]


const newitem=[] //.forEach with condition
newNums.forEach((num)=>{ //no return value
    if(num>2){
        newitem.push(num) //manually pushing into new array
    }
})
console.log(newitem);


const books = [ //.filter with objects
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }, //object array
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 }, //object array
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ]; //filter with multiple conditions
let userBooks=books.filter((bk)=>bk.genre==='History') //first filter
console.log(userBooks); //second filter on previous result
userBooks=books.filter((bk)=>{return bk.publish>=1995 && bk.genre==="History"}) //chained condition
console.log(userBooks); //final result