import React, { useState } from 'react'

const Message = () => {
    /* let msg = "Hello" */

    let [counter, setCounter] = useState(1);
    let [msg, setMSG] = useState("Hello");
    let [contacts, setContacts] = useState([])

    let gmHandler = () => {
        setMSG("Good Morning")
    }
    let gnHandler = () => {
        setMSG("Good Night")
    }
    return (
        <div>
            <h1>Message:{msg} </h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
            <hr />
            <h1>Counter:{counter}</h1>
            <button onClick={() => { setCounter(counter - 1) }}>-</button>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
        </div>
    )
}

export default Message
