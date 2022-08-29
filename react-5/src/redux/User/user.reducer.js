import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let intialState = {
    users: [],
    loading: true
}
//import Action types 
let userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'USER_REQ':
            return { loading: false }
        case 'USER_SUCCESS':
            return {
                users: action.payload
            }
        case 'USER_FAILURE':
            return {
                loading: false
            }
        default:
            return state
    }
}

export { userReducer }