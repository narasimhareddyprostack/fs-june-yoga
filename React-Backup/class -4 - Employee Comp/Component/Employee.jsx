import React from 'react'
class Employee extends React.Component {
    emp = {
        eid: 101,
        ename: "Rahul Gandhi",
        eage: 50,
        profile_Pic: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Rahul_Gandhi_%28portrait_crop%29.jpg',
        status: 'Single',
        esal: 45000,
        loc: ['Wayanad', 'Noida']
    }
    render() {
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.emp.profile_Pic} height="250px" alt="Rahul Gandhi - Still Single" />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item"> Employee ID: {this.emp.eid}</li>
                                <li className="list-group-item">Name: {this.emp.ename}</li>
                                <li className="list-group-item">Age: {this.emp.eage}</li>
                                <li className="list-group-item">Location: {this.emp.loc[1]}</li>
                                <li className="list-group-item">Salary: {this.emp.esal}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Employee