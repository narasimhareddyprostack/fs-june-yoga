import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor - will execute")
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        console.log("Third")
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            //console.log(response)
            console.log(response.data)
            this.setState({ users: response.data })
        }).catch(() => { })
    }
    componentWillUnmount() {
        console.log("Last - to clean to objecg")
    }
    getUserData = () => {
        //Axios.get('https://jsonplaceholder.typicode.com/users').then(() => { }).catch(() => { })

    }
    render() {
        console.log("Second -Render method")
        return (
            <div className="container">
                <pre>{JSON.stringify(this.state)}</pre>
                {/*     <button onClick={this.getUserData}>Get Data</button> */}
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.state.users.length > 0 ? <React.Fragment>
                                        {
                                            this.state.users.map((user, index) => {
                                                return <tr key={index}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                </tr>
                                            })
                                        }
                                    </React.Fragment> : <>{/* <h4>No Data</h4> */}</>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users
/*
API URL    :https://jsonplaceholder.typicode.com/users
Method Type:GET
Access     :Public
Req Fields :None
*/