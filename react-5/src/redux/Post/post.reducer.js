import { GET_POST_REQ, GET_POST_SUCCESS, GET_POST_FAILURE } from './post.action'
let initial_State = {
    posts: [],
    loading: true
}
let postReducer = (state = initial_State, action) => {
    switch (action.type) {
        case 'GET_POST_REQ':
            return { ...state, loading: true }
        case 'GET_POST_SUCCESS':
            return {
                ...state, posts: action.payload
            }
        case 'GET_POST_FAILURE':
            return { ...state, loading: true }
        default:
            return state
    }
}
export { postReducer }