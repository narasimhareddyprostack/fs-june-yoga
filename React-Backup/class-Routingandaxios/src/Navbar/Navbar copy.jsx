import React from 'react'

const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/home">React Example</a>
        <div classNam="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="/home">Home</a></li>

            </ul>
        </div>
    </nav>
}

export default Navbar
