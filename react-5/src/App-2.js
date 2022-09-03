import React from 'react'
import Counter from './Counter/Counter'
import Product from './Product/Product'
import User from './User/User'
import Posts from './Post/Posts'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return <div>
        <Provider store={store}>
            <Router>

                <Navbar />
                <Routes>
                    <Route path="/counter" element={<Counter />} />
                    {/*    <Route path="/message" element={<Message />} /> */}
                    <Route path="/product" element={<Product />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/post" element={<Posts />} />
                </Routes>
            </Router>
        </Provider>
    </div>
}

export default App
