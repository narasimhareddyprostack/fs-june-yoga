import React, { Component } from 'react'

export class CompB extends Component {
    render() {
        return (
            <div>
                <pre>{this.props.message}</pre>
            </div>
        )
    }
}

export default CompB
