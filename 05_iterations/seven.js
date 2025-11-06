const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 10 numbers
const newNums=myNumbers.map((num)=> num+10) // add 10 to each number
console.log(newNums); // [11,12,13,14,15,16,17,18,19,20]

const newNos=myNumbers // chain of methods
                .map((num)=> num*10) // multiply each number by 10
                .map((num)=> num+1) // add 1 to each number
                .filter((num)=> num>=40) // filter numbers greater than or equal to 40
console.log(newNos); // [41,51,61,71,81,91,101]