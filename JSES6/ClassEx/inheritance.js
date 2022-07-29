class Account {
    constructor(id, name, email) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Email = email
    }
    get_Account_Details() {
        return this.acc_Id + " : " + this.acc_Name;
    }
    get_Address() {
        return "Dummy Address"
    }
}

class Savings_Account extends Account {
    constructor(id, name, email, amount) {
        super(id, name, email);
        this.acc_Amount = amount
    }
    get_Account_Bal() {
        return this.acc_Amount
    }
}
let sa1 = new Savings_Account(101, "Rahul", "rahul@gmail.com", 50000)

console.log(sa1.get_Account_Details())
console.log(sa1.get_Address())
console.log(sa1.get_Account_Bal())
//class Current_Account extends Account { }