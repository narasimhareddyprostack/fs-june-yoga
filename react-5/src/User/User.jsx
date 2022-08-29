import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_Action } from '../redux/User/user.action'
const User = () => {
    let users = useSelector((state) => {
        return state.user
    })
    let dispatch = useDispatch();
    let getDataHandler = () => {
        //dispatch redux user action
        dispatch(user_Action())
    }
    return (
        <div>
            <pre>{JSON.stringify(users)}</pre>
            <button onClick={getDataHandler}>Get User Data</button>
        </div>
    )
}

export default User
