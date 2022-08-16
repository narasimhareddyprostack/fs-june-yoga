import React from 'react'
/* import Message from './Message/Message' */
import Navbar from './Navbar/Navbar'
import Employee from './Employee/Employee'
import Counter from './Counter/Counter'
class App extends React.Component {
    render() {
        return <div>
            <Navbar />
            <h1>App Component</h1>
            <hr />

            <Employee />
            {/* <Counter /> */}
        </div>
    }
}
export default App