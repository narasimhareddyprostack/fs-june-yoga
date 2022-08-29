import { combineReducers } from "redux";
import { productReducer } from './Product/product.reducer'
import { counterReducer } from './Counter/counter.reducer'
import { messageReducer } from './Message/message.reducer'
import { userReducer } from './User/user.reducer'
import { postReducer } from './Post/post.reducer'
let rootReducer = combineReducers({
    counter: counterReducer,
    message: messageReducer,
    product: productReducer,
    user: userReducer,
    post: postReducer
});

export { rootReducer }