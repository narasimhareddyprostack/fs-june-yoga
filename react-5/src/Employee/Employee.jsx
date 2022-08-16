import React, { Component } from 'react'
import employees from './data'
class Employee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: employees
        }
    }
    render() {
        return <div className="container">
            <pre>{JSON.stringify(this.state.employees)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((emp, index) => {
                                    return <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Employee
