import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateProduct = () => {
    let navigate = useNavigate();
    let [flag, setFlag] = useState(false);
    let [product, setProduct] = React.useState({ name: "", image: "", price: "", qty: "", info: "" })
    let updateHandler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    let changeImage = (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setProduct({ ...product, image: reader.result })
            }
        })
    }
    let submitHandler = (event) => {
        event.preventDefault()
        Axios.post('http://127.0.0.1:8080/api/product', product)
        setFlag(true)
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        {
            flag ? navigate('/products') : <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>Create Product</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler} >
                                <div className="form-group">
                                    <input onChange={updateHandler} name="name" type="text" className="form-control" placeholder="Product Name" />
                                </div>
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input onChange={changeImage} name="image" type="file" className="custom-file-input" />
                                        <label className="custom-file-label" >Image</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input onChange={updateHandler} name="price" type="number" className="form-control" placeholder="Price" />
                                </div>
                                <div className="form-group">
                                    <input onChange={updateHandler} name="qty" type="number" className="form-control" placeholder="QTY" />
                                </div>
                                <div className="form-group">
                                    <input onChange={updateHandler} name="info" type="text" className="form-control" placeholder="Info" />
                                </div>
                                <button type="submit" className="btn btn-success btn-md">Create Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }

    </div>
}

export default CreateProduct
