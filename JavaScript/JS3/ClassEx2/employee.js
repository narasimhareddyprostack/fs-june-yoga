class Employee {
    f_Name;
    set_Name(name) {
        this.f_Name = name
    }
    get_Name() {
        return this.f_Name
    }
}

let e1 = new Employee()
e1.set_Name("Rahul Gandhi")
console.log(e1)
//console.log(e1.get_Name())
let e2 = new Employee()
e2.set_Name("Sonia")
console.log(e2)
//console.log(e2.get_Name())