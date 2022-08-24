import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'
class ContactApp extends Component {
    constructor(props) {
        super(props);
        console.log("First constructor will execute")
        this.state = { contacts: [], sel_Contact: {} }
    }
    userSelected_Contact_Method = (contact) => {
        this.setState({ sel_Contact: contact })
        console.log(contact.name.first, "line 12")
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
  {/*               <span>....</span> */}
                {/* <pre>{JSON.stringify(this.state.sel_Contact)}</pre> */}
                <div className="col-md-8">
                    {
                        this.state.contacts.length > 0 ? <><ContactList one={"GM"} two={this.userSelected_Contact_Method} contacts={this.state.contacts} /></> : null
                    }

                </div>
                <div className="col-md-4">
                    {
                        Object.keys(this.state.sel_Contact).length > 0 ? <>  <ContactDetails contact={this.state.sel_Contact} /></> : null
                    }

                </div>
            </div>
        </div>
    }
}

export default ContactApp
