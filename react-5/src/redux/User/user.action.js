import Axios from 'axios'
//crate action types 
const USER_REQ = 'USER_REQ'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_FAILURE = 'USER_FAILURE'
//actions 
let user_Req_Action = () => { return { type: USER_REQ } }
let user_Sucess_Action = (user) => {
    return {
        type: USER_SUCCESS, payload: user
    }
}
let user_Failure_Action = () => {
    return { type: USER_FAILURE }
}
let user_Action = () => {
    return (dispatch) => {
        dispatch(user_Req_Action());
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(user_Sucess_Action(response.data));
            })
            .catch(() => {
                dispatch(user_Failure_Action())
            })
    };
}

export { USER_REQ, USER_SUCCESS, USER_FAILURE, user_Action }