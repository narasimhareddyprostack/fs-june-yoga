class Account {
    constructor(name, email, address) {
        this.acc_Name = name;
        this.acc_Email = email;
        this.acc_Address = address
    }
}
class SA extends Account {
    constructor(id, name, email, amount, address) {
        super(name, email, address)
        this.acc_Id = id
        this.acc_Amount = amount
    }
}
let c1 = new SA(101, "Rahul", "rahul@gmail.com", 50001, "New Delhi-GB")
let c2 = new SA(102, "Sonia", "sonial@gmail.com", 150001, "New Delhi-10 Janpath")
console.log(c1)
console.log(c2)