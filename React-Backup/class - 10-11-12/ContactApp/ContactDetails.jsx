import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        let { contact } = this.props
        return (
            <div>
                {/*    <pre>{JSON.stringify(this.props)}</pre> */}
                <h1>Contact Details</h1>
                <div className="card">
                    <div className="card-header">
                        <img src={contact.picture.large} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">{contact.gender}</li>
                            <li className="list-group-item">{contact.email}</li>
                            <li className="list-group-item">{contact.dob.age}</li>
                            <li className="list-group-item">{contact.login.username}</li>
                            <li className="list-group-item">{contact.location.country}</li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails
