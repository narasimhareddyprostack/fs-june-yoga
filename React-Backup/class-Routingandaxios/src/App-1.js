import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
    return <Fragment>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
            </Switch>
        </Router>
    </Fragment>
}

export default App
