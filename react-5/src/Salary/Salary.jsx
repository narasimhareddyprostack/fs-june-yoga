import React from 'react'
class Salary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: 10000
        }
    }
    hikeHandler = (hike) => {
        this.setState({
            salary: hike
        })
    }
    render() {
        return <div>
            <h1>Salary Component</h1>
            <h2>Employee Salary: {this.state.salary}</h2>
            <button onClick={this.hikeHandler.bind(this, 30000)}>Hike 200 %</button>
            <button onClick={this.hikeHandler.bind(this, 20000)}>Hike 100 %</button>
            <button onClick={this.hikeHandler.bind(this, 15000)}>Hike 50 %</button>
            <button onClick={this.hikeHandler.bind(this, "Do Hardwork!")}>Hike -Zero %</button>
        </div>
    }
}
export default Salary