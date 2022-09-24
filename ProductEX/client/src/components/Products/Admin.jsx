import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios';
const Admin = () => {
    let navigate = useNavigate();
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/products/').then((response) => {
            setProducts(response.data)
        }).catch()
    }, []);
    let deleteProduct = (id) => {
        axios.delete(`http://127.0.0.1:8080/api/product/${id}`).then(() => {
            //useNavigate
            navigate(0)
        }).catch()
    }
    return <div className="container mt-4">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
            <div className="col-md-9">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at iure eum, dignissimos assumenda dolorum, itaque nisi veniam repellat minus porro culpa obcaecati officiis laudantium beatae, recusandae optio atque voluptatibus?</p>
            </div>
        </div>
        <div className="row">
            <Link to="/create-product" className="btn btn-warning">Create Product</Link>
        </div>
        <div style={{ marginBottom: '25px' }}></div>
        <div className="row">
            <div className="col-md-9">
                <table className="table table-hover">
                    <thead className='bg-danger text-white'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? <>
                                {
                                    products.map((product) => {
                                        return <tr>
                                            <td>{product._id.substr(20, 24)}</td>
                                            <td>{product.name}</td>
                                            <td><img src={product.image} height="40px" /></td>
                                            <td>{product.price}</td>
                                            <td>{product.qty}</td>
                                            <td>
                                                <Link to="/" className="btn btn-success mr-2">Edit</Link>
                                                <Link onClick={deleteProduct.bind(this, product._id)} className="btn btn-danger">Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </> : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div >
}

export default Admin
