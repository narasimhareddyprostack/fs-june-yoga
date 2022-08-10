let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }
];
let createEmployee = (emp) => {
    console.log("Test Case 123")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            employees.push(emp)
            flag ? resolve("Data Inserted Successfully") : reject("Not Inserted")
        }, 4000)
    });
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((emp) => {
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr>`
        })
        document.getElementById("promiseEx").innerHTML = rows
    }, 1000)
}

createEmployee({ id: 103, name: "Priyanka", sal: 65000 })
    .then((msg) => {
        console.log(msg);
        getEmployees()
    })
    .catch((err) => { console.log(err) })