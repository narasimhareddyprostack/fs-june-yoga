const bcrypt = require('bcrypt')
let user = {
    name: "Rahul",
    cc: '1234 5678 1234 5678',
    user_Name: 'rahul@pm.com'
}
let salt = bcrypt.genSaltSync(1);
let new_CC = bcrypt.hashSync(user.cc, salt)
let new_User_Name = bcrypt.hashSync(user.user_Name, salt)
/* console.log(user.cc)
console.log(new_CC)
console.log(user.user_Name)
console.log(new_User_Name) */
let flag = bcrypt.compareSync("rahul@gmail.com", new_User_Name);
console.log(flag)