class Employee {
    //class is template to construct object
    id = 101;
    name = "Rahul";
    get_Details = () => {
        console.log("GM")
    }
}
let e1 = new Employee()
console.log(e1.id)
console.log(e1.name)
e1.get_Details()
let e2 = new Employee()
let e3 = new Employee()
let e4 = new Employee()