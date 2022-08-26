import React from 'react'
import { decrAction, incrAction } from '../redux/Counter/counter.action'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    let x = useSelector((state) => {
        return state.counter;
    })
    let dispatch = useDispatch();
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return (
        <div>
            <h1>Counter Example</h1>
            <pre>{JSON.stringify(x)}</pre>
            <button onClick={decrHandler}>-</button> &nbsp;&nbsp;
            <button onClick={() => { dispatch(incrAction()) }}>+</button>
        </div>
    )
}

export default Counter
