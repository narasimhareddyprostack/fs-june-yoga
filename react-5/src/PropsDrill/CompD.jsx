import React, { Component } from 'react'
class CompD extends Component {
    render() {
        return (
            <div>
                <h1>Component D</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Employee Name:{this.props.name2}</h4>
            </div>
        )
    }
}

export default CompD
