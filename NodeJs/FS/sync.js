//import fs from 'fs'  //ES6
const fs = require('fs');//ES5 

//reading Data from file(abc.txt)
let data = fs.readFileSync('./abc.txt', 'utf-8');
console.log(data);

fs.writeFileSync('xyz.txt', data, 'utf-8')

