const myNums=[1,2,3,4,5,6,7,8,9,10]
const myTotal = myNums.reduce(function (accumulator, currentValue) { // accumulator = previous value , currentValue = current value
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);     // for understanding purpose
    return accumulator + currentValue // returning the sum
},3) // 3 is initial value for accumulator
console.log(myTotal); // prints 58 (3+1+2+3+4+5+6+7+8+9+10)

const myTotal2 = myNums.reduce((accumulator, currentValue) => accumulator + currentValue,0)/10 // initial value is 0
console.log(myTotal2); // prints 5.5 (1+2+3+4+5+6+7+8+9+10)/10

const words = ['Hello', 'World', 'This', 'Is', 'Reduce'] // array of words
const sentence = words.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`) // concatenating words
console.log(sentence); // prints "Hello World This Is Reduce"

const shoppingCart = [ // array of objects
    {itemName: 'Book', price: 200}, // each object has itemName and price
    {itemName: 'Pen', price: 20},
    {itemName: 'Bag', price: 500},
    {itemName: 'Shoes', price: 1000}
] // total price of items in shopping cart
const totalAmount = shoppingCart.reduce((accumulator, currentItem) => accumulator + currentItem.price,0)
// initial value is 0 // summing up prices
console.log(`Total Amount: ${totalAmount}`); // prints Total Amount: 1720

const maxPrice = shoppingCart.reduce((max, currentItem) => (currentItem.price > max ? currentItem.price : max),0) // finding max price
console.log(`Max Price: ${maxPrice}`); // prints Max Price: 1000

const minPrice = shoppingCart.reduce((min, currentItem) => (currentItem.price < min ? currentItem.price : min),Infinity) // finding min price
console.log(`Min Price: ${minPrice}`); // prints Min Price: 20