import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'
class ContactApp extends Component {
    constructor(props) {
        super(props);
        console.log("First constructor will execute")
        this.state = { contacts: [] }
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()
    }
    render() {
        console.log("Second - render method ")
        return <div className="container">
            {/*             <h1>Contact App</h1> */}
            <div className="row">
                {/*    <pre>{JSON.stringify(this.state.contacts)}</pre> */}
                <div className="col-md-8">
                    {
                        this.state.contacts.length > 0 ? <><ContactList contacts={this.state.contacts} /></> : null
                    }

                </div>
                <div className="col-md-4">
                    <ContactDetails />
                </div>
            </div>
        </div>
    }
}

export default ContactApp
