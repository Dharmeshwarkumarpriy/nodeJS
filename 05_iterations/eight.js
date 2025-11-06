const myNums=[1,2,3,4,5,6,7,8,9,10]
const myTotal = myNums.reduce(function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);    
    return accumulator + currentValue
},3)
console.log(myTotal);

const myTotal2 = myNums.reduce((accumulator, currentValue) => accumulator + currentValue,0)
console.log(myTotal2);

const words = ['Hello', 'World', 'This', 'Is', 'Reduce']
const sentence = words.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`)
console.log(sentence);

const shoppingCart = [
    {itemName: 'Book', price: 200},
    {itemName: 'Pen', price: 20},
    {itemName: 'Bag', price: 500},
    {itemName: 'Shoes', price: 1000}
]
const totalAmount = shoppingCart.reduce((accumulator, currentItem) => accumulator + currentItem.price,0)
console.log(`Total Amount: ${totalAmount}`);