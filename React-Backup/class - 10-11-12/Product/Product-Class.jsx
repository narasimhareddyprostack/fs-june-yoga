import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_Name: "Iphone 5s",
            p_Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIfpEn01QWWd3_h7LhNyRWGyApj-NvdVt2J6LgEjmXagmhdoUWKB78mtaY1J3-i3_k3ZMhgGHIaAY&usqp=CAc",
            p_Price: 20000,
            p_QTY: 1
        }
    }
    incrHandler = () => {
        this.setState({ p_QTY: this.state.p_QTY + 1 })
    }
    decrHandler = () => {
        this.setState({ p_QTY: this.state.p_QTY - 1 })
    }
    render() {
        return <div className="container">
            <div className="row">
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
                                <td>{this.state.p_Name}</td>
                                <td><img src={this.state.p_Image} height="80px" /></td>
                                <td>{this.state.p_Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.p_QTY} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.p_QTY * this.state.p_Price}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product
