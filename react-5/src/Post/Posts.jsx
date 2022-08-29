import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_Post_Action } from '../redux/Post/post.action'
const Posts = () => {
    let posts = useSelector((state) => {
        return state.post
    })
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_Post_Action())
    }, []);
    /* let posts_Handler = () => {
        //dispatch redux actions
        dispatch(get_Post_Action())
    } */
    return <div className="container">

        <div className="row">
            <div className="col-md-8">
                <pre>{JSON.stringify(posts)}</pre>
                <h5>Dispaly Post</h5>
                {/* <button onClick={posts_Handler}>Get Post</button> */}
            </div>
        </div>
    </div>
}

export default Posts

