import React from 'react'

const Employee = (props) => {
    return (
        <div>
            <h5>Employee Compoent</h5>
            <pre>{JSON.stringify(props)}</pre>
            <div className="card">
                <div className="card-header">
                    <h3>Name:{props.prop3.name}</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">ID:{props.prop1}</li>
                        <li className="list-group-item">Loc:{props.prop2[0]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Employee
