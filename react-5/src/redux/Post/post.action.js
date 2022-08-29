import Axios from 'axios'
//action types 
const GET_POST_REQ = 'GET_POST_REQ'
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
const GET_POST_FAILURE = 'GET_POST_FAILURE'
//actions
let get_Post_Req = () => {
    return { type: GET_POST_REQ }
}
let get_Post_Success = (post_Data) => {
    return { type: GET_POST_SUCCESS, payload: post_Data }
}
let get_Post_Failure = () => {
    return { type: GET_POST_FAILURE }
}

let get_Post_Action = () => {
    return (dispatch) => {
        dispatch(get_Post_Req());

        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log("test Case 123")
                dispatch(get_Post_Success(res.data))
            })
            .catch()
    }
}
export { get_Post_Action, GET_POST_REQ, GET_POST_SUCCESS, GET_POST_FAILURE }

