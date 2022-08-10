let employees = [];
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            employees.push(emp)
            flag ? resolve("Data Inserted Successfully") : reject("Not Inserted")
        }, 4000)
    });
}
let getEmployees = () => { }

createEmployee({}).then((msg) => { console.log(msg) }).catch((err) => { console.log(err) })