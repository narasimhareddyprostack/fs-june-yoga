import React from 'react'
class Message extends React.Component {
    constructor(props) {
        super(props);
        console.log("const - First")
    }
    message = "Hello"
    render() {
        console.log("render - Second")
        return <div>
            <h1>Message Component</h1>
            <h3>Wish Message: {this.message}</h3>
            <button>Change Buddy</button>
        </div>
    }
}
export default Message