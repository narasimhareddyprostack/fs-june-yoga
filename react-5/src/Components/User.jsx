import React, { Component } from 'react'
import Employee from './Employee'
class User extends Component {
    uid = 101;
    loc = ['Bangalore', 'New Delhi']
    details = {
        name: "Rahul Gandhi",
        email: "rahul@gmail.com"
    }
    render() {
        return <div className="row">
            <div className="col-md-6 bg-dark">
                User Comp
            </div>
            <div className="col-md-6 bg-primary">

                <Employee prop1={this.uid} prop2={this.loc} prop3={this.details}/>
            </div>
        </div>
    }
}

export default User
