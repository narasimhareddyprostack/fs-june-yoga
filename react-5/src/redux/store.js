import { createStore } from "redux";
import { counterReducer } from './Counter/counter.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'
let store = createStore(rootReducer, composeWithDevTools());

export { store }