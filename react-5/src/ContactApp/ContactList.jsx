import React, { Component } from 'react'

class ContactList extends Component {
    render() {
        return (
            <div>
                <h1>Contact List</h1>
                {/*  <pre>{JSON.stringify(this.props.contacts)}</pre> */}
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>SL No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/*  <td>{contact.login.uuid.slice(-4)}</td> */}
                                    <td>{contact.login.uuid.substr(34, 36)}</td>
                                    <td>{contact.name.first.toUpperCase()}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.gender.slice(0, 1).toUpperCase()}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ContactList
