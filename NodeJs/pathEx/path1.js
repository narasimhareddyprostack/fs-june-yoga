const path = require('path')
console.log(`${__dirname}`)

//read four.txt path 
console.log(path.join(`${__dirname}`, "one", "two", "three", 'four.txt'))