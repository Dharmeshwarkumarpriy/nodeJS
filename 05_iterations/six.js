const coding =["js","python","c++","java","ruby"]
const values = coding.forEach((item)=>{
    console.log(item);
    return item    
})
console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>num>4)
console.log(newNums);

const mynos=[1,2,3,4,5,6,7,8]
const newNos= myNums.filter((num)=>{
    return num>5
})
console.log(newNos);

//const newitem=[9,3,4,5,6,7,1]
const newitem=[]
newNums.forEach((num)=>{
    if(num>2){
        newitem.push(num)
    }
})
console.log(newitem);



let userBooks=books.filter((bk)=>bk.genre==='history')
userBooks=books.filter((bk)=>{return bk.publish>=1995 && bk.genre==="history"})
console.log(userBooks);