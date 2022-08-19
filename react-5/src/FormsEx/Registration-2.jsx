import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            e_Name: "",
            e_Email: "",
            e_Mobile: ""
        }
    }
    updateHandler = (event) => {
        //ui business login
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.submitHandler}>
                    <label >User Name</label>
                    <input type="text" onChange={this.updateHandler} name="e_Name" /> <br />
                    <label >Email</label>
                    <input type="text" onChange={this.updateHandler} name="e_Email" /> <br />
                    <label >Mobile</label>
                    <input type="text" onChange={this.updateHandler} name="e_Mobile" /> <br />
                    <input type="submit" value="Registration" />
                </form>

            </div>
        )
    }
}

export default Registration
