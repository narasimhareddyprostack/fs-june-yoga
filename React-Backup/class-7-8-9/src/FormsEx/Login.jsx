import React from 'react'
class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        /*  console.log(event)
         console.log(event.target)
         console.log(event.target.value) */
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="card">

                        <div className="card-header">
                            <h4>Login Details</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input onChange={this.emailHandler} type="text" className="form-control" placeholder="Email Id" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.passwordHandler} type="text" className="form-control" placeholder="Password" />
                                </div>
                                <input type="submit" className="btn btn-success" value="login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login