import React from 'react'
import Navbar from './Navbar/Navbar'
import CompA from './Components/CompA'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <CompA />
            </div>
        )
    }
}

export default App
