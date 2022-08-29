import { createStore, applyMiddleware } from "redux";
import { counterReducer } from './Counter/counter.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export { store }