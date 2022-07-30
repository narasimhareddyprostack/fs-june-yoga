let min_Bal = 500
let get_Details = () => {
    console.log("GM")
}
class Account {
    constructor() {
        console.log("Constructor execute Automatically")
    }
}
module.exports = { min_Bal, Account, get_Details }  //ES5
//export { min_Bal, Account, get_Details }   //ES6