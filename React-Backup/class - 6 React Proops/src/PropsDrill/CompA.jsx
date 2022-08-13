import React, { Component } from 'react'
import CompB from './CompB'
class CompA extends Component {
    ename = "Rahul Gandhi"
    eloc = ["Wayanad", "New Delhi"]
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <hr />
                <CompB name={this.ename} loc={this.eloc} />
            </div>
        )
    }
}

export default CompA
