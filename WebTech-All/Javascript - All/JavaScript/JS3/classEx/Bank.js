class Bank {
    min_Bal = 500;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit() {
        console.log("Please Deposit")
    }
    withdrawl() {
        console.log("Dont withdrawl")
    }
    get_St() {
        console.log("Pls Wait")
    }
    get_Bal() {
        console.log("Pappa Going bank")
    }
    close_Account() {
        console.log("Cant maintain")
    }
}


let r = new Bank()
let s = new Bank()
let p = new Bank()
console.log(r)
r.open_Account()
r.deposit()
r.withdrawl()
r.get_St()
r.get_Bal()
r.close_Account()