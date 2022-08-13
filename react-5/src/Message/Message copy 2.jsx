import React from 'react'
class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    message = "Hello"
    changeMessageHandler = () => {
        console.log(this.message)
        this.message = "Hello,Rahul Gandhi"
        console.log(this.message)
        this.forceUpdate()
    }
    render() {
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.message}</h3>
            <button onClick={this.changeMessageHandler}>Change Buddy</button>
        </div>
    }
}
export default Message