import { INCR_QTY, DECR_QTY } from './product.action'
let initialState = {
    product_Name: "Iphone 14",
    price: 80000,
    qty: 1,
    image: ''
}
let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCR_QTY':
            return {
                ...state,
                qty: state.qty + 1
            }
        case 'DECR_QTY':
            return {
                ...state,
                qty: state.qty - 1
            }
        default:
            return state
    }
}
export { productReducer }