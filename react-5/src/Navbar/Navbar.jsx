import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home">React Example</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/service">Service</Link></li>

            </ul>
        </div>
    </nav>
}

export default Navbar
