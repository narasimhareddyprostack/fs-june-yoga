import React, { Component } from 'react'

export class Employee extends Component {
    render() {
        return (
            <div>
                <h5>Employee Compoent</h5>
                <pre>{JSON.stringify(this.props)}</pre>
                <div className="card">
                    <div className="card-header">
                        <h3>Name:{this.props.prop3.name}</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">ID:{this.props.prop1}</li>
                            <li className="list-group-item">Loc:{this.props.prop2[0]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee
