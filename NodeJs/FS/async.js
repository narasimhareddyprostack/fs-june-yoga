const fs = require('fs');

fs.readFile('xyz.txt', 'utf-8', (err, data) => {
    console.log(data);
    fs.writeFile('a.txt', data, (err) => {
        if (err) throw err
    });
})
console.log("Hello,GM")