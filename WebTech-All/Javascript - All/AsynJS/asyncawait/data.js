let employees = [{ id: 101, name: "Rahul", sal: 45000 }, { id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? resolve("Inserted Successfully") : reject("Not Inserted")
            employees.push(emp)
        }, 4000)

    })
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
        document.getElementById("tbody_Data").innerHTML = rows
    }, 1000)
}

let dummy = async () => {
    await createEmployee({ id: 103, name: "Priynka", sal: 65000 })
    getEmployees()
}
dummy()