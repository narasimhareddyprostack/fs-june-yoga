import React, { Component } from 'react'
import CompC from './CompC'
class CompB extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <CompC name1={this.props.name} winning_Loc={this.props.loc[0]} />
            </div>
        )
    }
}

export default CompB
