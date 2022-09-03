import React from 'react'
import Calc from './HooksEx/Calc'

import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return <div>
        <Router>

            <Navbar />
            <Routes>


                <Route path="/memo" element={<Calc />} />

            </Routes>
        </Router>

    </div>
}

export default App
