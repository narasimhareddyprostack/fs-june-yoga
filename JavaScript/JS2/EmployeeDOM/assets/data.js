let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 },
{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 },
{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 },
{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 },
{ id: 103, name: "Priyanka Gandhi", salary: 65000 }]

function display_EmployeeData() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                        <td> ${emp.id}</td>
                        <td> ${emp.name}</td>
                        <td> ${emp.salary}</td>
                        </tr>`
    }

    document.getElementById('tbody_Data').innerHTML = rows
}
