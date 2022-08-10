class Account {
    min_Bal = 500
}
class SA extends Account { }
class CA extends Account {
    min_Bal = 5001
}
let c1 = new SA()
console.log(c1.min_Bal)


let c2 = new CA()
console.log(c2.min_Bal)