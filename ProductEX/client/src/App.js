import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Product from './components/Products/ProductList'
import Admin from './components/Products/Admin'
import CreateProduct from './components/Products/CreateProduct'
let App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-product" element={<CreateProduct />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  </>
}
export default App