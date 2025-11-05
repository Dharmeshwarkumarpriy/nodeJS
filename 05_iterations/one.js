// for 

for (let i = 0; i <= 10; i++) { // initialization , condition , increment/decrement
    const element = i; // accessing the value
    if(element==5){ // conditional check
        console.log("s is best number"); // action
    }
    console.log(element); // action / print
    
}

for (let index = 1; index <=10; index++) { // outer loop
    console.log(`outer loop value:${index}`); // action
    for (let j = 1; j <=10; j++) {
        console.log(`inner loop value ${j} and inner loop ${index}`); // action
        console.log(index + '*' + j + "=" + index*j); // multiplication table
        
    }

}

let myArray=["flash","batman","superman"] // array initialization / declaration
console.log(myArray.length); // accessing length of array
for (let index = 0; index < myArray.length; index++) { // iterating through array
    const element = myArray[index]; // accessing value
    console.log(element); // action / print
    
}

// break and continue...
for (let index = 0; index <=20; index++) { // iterating from 0 to 20
    if(index==5){ // conditional check
        console.log(`detected 5`);
        break;
        
    }
    console.log(`value of i is ${index}`); // action / print
    
}

for (let index = 0; index <=20; index++) { // iterating from 0 to 20
    if(index==5){ // conditional check
        console.log(`detected 5`);
        continue // skip the current iteration
        
    }
    console.log(`value of i is ${index}`);// action / print
    
}