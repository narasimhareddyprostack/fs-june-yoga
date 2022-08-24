import React, { useState } from 'react'

const Product = () => {
 /* let [name, setName] = useState("")
    let [counter, setCoounter] = useState(1);
    let [contacts, setContacts] = useState([]); */
    let [product, setProduct] = useState({
        p_Name: "Iphone 5s",
        p_Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIfpEn01QWWd3_h7LhNyRWGyApj-NvdVt2J6LgEjmXagmhdoUWKB78mtaY1J3-i3_k3ZMhgGHIaAY&usqp=CAc",
        p_Price: 20000,
        p_QTY: 1
    })
    let incrHandler = () => {
        setProduct({ ...product, p_QTY: product.p_QTY + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, p_QTY: product.p_QTY - 1 })
    }
    return <div className="container mt-5">
        <div className="row">
            <pre>{JSON.stringify(product)}</pre>
            <div className="col-md-8">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.p_Name}</td>
                            <td> <img src={product.p_Image} height="80px" alt="" /></td>
                            <td>{product.p_Price}</td>
                            <td><i className="fa fa-minus-circle" onClick={decrHandler}></i> {product.p_QTY} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                            <td>{product.p_QTY * product.p_Price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Product
