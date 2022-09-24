import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const ProductList = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        Axios.get('http://127.0.0.1:8080/api/products/').then((response) => {
            setProducts(response.data)
        }).catch((err) => {

        })
    }, []);
    return <div className="container">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
            {
                products.length > 0 ? <>
                    {
                        products.map((product) => {
                            return <div className="col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>{product.name}</li>
                                            <li>{product.price}</li>
                                            <li>{product.qty}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </> : null
            }
        </div>
    </div>
}

export default ProductList
