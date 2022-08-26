import React from 'react'
import Counter from './Counter/Counter'
import Product from './Product/Product'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <Provider store={store} >
            <Counter />
            <hr />
            <Product />
        </Provider>
    )
}

export default App
