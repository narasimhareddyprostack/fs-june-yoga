import React from 'react'
import Employee from './Employee'
function User() {

    let ename = "Rahul Gandhi"
    return (
        <div>
            <h1>User Component</h1>
            <hr />
            <Employee msg={"Good Morning"} name={ename} />

        </div>
    )
}

export default User
