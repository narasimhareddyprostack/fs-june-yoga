import React from 'react'
import Navbar from './Navbar/Navbar'
import Display from './Components/Display'
import CompA from './PropsDrill/CompA'
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {/*   <Display /> */}
                <CompA />
            </div>
        )
    }
}

export default App
