const fs = require('fs')
const path = require('path')

fs.readFile(path.join(`${__dirname}`, "one", "two", "three", "four.txt"), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})
fs.readFile(path.join(`${__dirname}`, "one", "two", "three", "user.json"), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)

})