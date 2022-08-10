import React from 'react'
class Message extends React.Component {
    ename = "Rahul Gandhi"
    esal = 45000
    eimage = 'https://wallpaperaccess.com/full/4373735.jpg'
    render() {
        return <div>
            <h3>Employee Name:{this.ename}</h3>
            <h3>Employee Salary:{this.esal}</h3>
            <img src={this.eimage} alt="rahul Ganhi beta" height="50%" />
            <button className="btn btn-success">Test</button>
        </div>
    }
}
export default Message