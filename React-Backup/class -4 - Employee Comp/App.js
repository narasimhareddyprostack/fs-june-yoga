import React from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './Component/Employee'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Employee />
            </div>
        )
    }
}

export default App
