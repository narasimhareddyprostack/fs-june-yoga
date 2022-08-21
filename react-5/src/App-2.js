import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return <Fragment>
        <Router>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/about">React Router Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"><Link className="nav-link" to="/service">Service</Link></li>
                        <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/home" component={Home} />

            </Switch>
        </Router>
    </Fragment>
}

export default App
