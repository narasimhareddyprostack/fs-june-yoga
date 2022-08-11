import React from 'react'

function Employee(props) {
    return (
        <div>
            <h1>Employee Component</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h2>Wish Message: {props.msg}</h2>
            <h3>Name: {props.name}</h3>
        </div>
    )
}

export default Employee
