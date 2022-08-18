import React from 'react'
class Salary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: 10000
        }
    }
    hike200Handler = () => {
        this.setState({ salary: 30000 })
    }
    hike100Handler = () => {
        this.setState({ salary: 20000 })
    }
    hike50Handler = () => {
        this.setState({ salary: 15000 })
    }
    hikeZeroHandler = () => {
        this.setState({ salary: "Buddy - do Hardwork, next corona year" })
    }
    render() {
        return <div>
            <h1>Salary Component</h1>
            <h2>Employee Salary: {this.state.salary}</h2>
            <button onClick={this.hike200Handler}>Hike 200 %</button>
            <button onClick={this.hike100Handler}>Hike 100 %</button>
            <button onClick={this.hike50Handler}>Hike 50 %</button>
            <button onClick={this.hikeZeroHandler}>Hike -Zero %</button>
        </div>
    }
}
export default Salary