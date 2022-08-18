import React from 'react'
class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        console.log(event)
        console.log(event.target.value)
        this.setState({ email: "rajnikanth@gmail.com" })
    }
    passwordHandler = (event) => {
        this.setState({ password: "Test123" })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <pre>{JSON.stringify(this.state)}</pre>
                        <div className="card-header">
                            <h4>Login Details</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input onChange={this.emailHandler} type="text" className="form-control" placeholder="Email Id" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.passwordHandler} type="text" className="form-control" placeholder="Password" />
                                </div>
                                <button className="btn btn-success"> Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login