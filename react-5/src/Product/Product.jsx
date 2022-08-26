import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incr_QYT_Action, decr_QTY_Action } from '../redux/Product/product.action'
const Product = () => {
    let dispatch = useDispatch();
    let product = useSelector((state) => {
        return state.product
    })
    return (
        <div className="container mt-8">
            <pre>{JSON.stringify(product)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <table className='table table-hover'>
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
                                <td>{product.product_Name}</td>
                                <td>{product.product_Name}</td>
                                <td>{product.price}</td>
                                <td> <i className='fa fa-minus-circle' onClick={() => { dispatch(decr_QTY_Action()) }}></i> {product.qty} <i className="fa fa-plus-circle" onClick={() => { dispatch(incr_QYT_Action()) }} ></i> </td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
