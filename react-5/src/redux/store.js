import { createStore } from 'redux'
import { messageReducer } from './Message/message.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
let store = createStore(messageReducer, composeWithDevTools());

export { store }
//what is store?

//how to create Store?
//what basis we need to create store?
//what store contains ?

