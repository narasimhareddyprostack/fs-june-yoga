function Employee(sal) {
    let tax = 4000
    this.sal = sal
    this.getTax = function () {
        return tax
    }
}

let e1 = new Employee(45000)
console.log(e1.getTax())
console.log(e1.sal)