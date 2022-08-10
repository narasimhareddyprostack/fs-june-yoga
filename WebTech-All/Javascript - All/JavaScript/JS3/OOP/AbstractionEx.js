function Employee(id, name, sal) {
    this.id = id
    this.name = name
    this.sal = sal
    let tax = 4000
    let cal_Emp_Sal = () => {
        console.log(`Employee Sal: ${this.sal - tax}`)
    }
    this.getEmp_Details = () => {
        console.log(`Emp Id: ${this.id} and Emp Name: ${this.name}`)
        cal_Emp_Sal()
    }
}

let e1 = new Employee(101, "Rahul", 45000)
e1.tax = 5000
e1.getEmp_Details()
//e1.cal_Emp_Sal()
//console.log(e1)