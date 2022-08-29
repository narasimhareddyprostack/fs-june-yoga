import { combineReducers } from "redux";
import { productReducer } from './Product/product.reducer'
import { counterReducer } from './Counter/counter.reducer'
import { messageReducer } from './Message/message.reducer'
import {userReducer} from './User/user.reducer'
let rootReducer = combineReducers({ counter: counterReducer, message: messageReducer, product: productReducer, user:userReducer });

export { rootReducer }