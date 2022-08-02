let user = { name: "Santhoosh", password: 'FirstJobNextMarriage', cc: '1234123456788765' }
//convert user data to hashed/crypted format

const bcrypt = require('bcryptjs')

let salt = bcrypt.genSaltSync(10);

let new_Password = bcrypt.hashSync(user.password, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
/* console.log(user.cc)
console.log(new_CC)
console.log(user.password)
console.log(new_Password)
 */
console.log(user)
user = { ...user, password: new_Password, cc: new_CC }
console.log(user)

let flag = bcrypt.compareSync('FirstJobNextMarriage', user.password)
flag ? console.log("Login Success") : console.log("Login Failure")
console.log(flag)