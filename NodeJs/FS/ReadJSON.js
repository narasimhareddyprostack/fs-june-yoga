const fs = require('fs')

fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) throw err
    //console.log(data)


    fs.writeFile('employee.json', data, (err) => {
        if (err) throw err
        console.log("Writing Data Successfully")
    })
})