// for in loop with objects and arrays...

const myObject={ // non-iterable object
    js: 'javaScript', // key-value pairs
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) { // key = 'js', 'cpp', 'rb', 'swift'
    console.log(key); // js cpp rb swift
    console.log(myObject[key]);    
    console.log(`${key} shortcut is  for ${myObject[key]}`); // js shortcut is for javaScript // cpp shortcut is for c++ // rb shortcut is for ruby // swift shortcut is for swift by apple //
}

const programing =['js',"rb","py","java",'cpp'] // array of strings..
for (const key in programing) { // key = 0,1,2,3,4
    console.log(key); // 0 1 2 3 4
    console.log(programing[key]); // js rb py java cpp
    console.log(`I love ${programing[key]}`); // I love js // I love rb // I love py // I love java // I love cpp //
        
}

// const map=new Map()      // iterable key-value pairs /
// map.set('IN',"india")    // key-value pair
// map.set('USA','united states of america')
// map.set('Fr','France')
// map.set('IN',"india")
// for (const key in map) {     // error: map is not iterable
//     console.log(key);
        
// }