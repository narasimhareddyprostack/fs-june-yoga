import React, { useState, useMemo } from 'react'
let Calc = () => {
    let [count, setCount] = useState(1);
    let [number, setNumber] = useState(5);
    let factEx = fact(number);
    //let factEx = useMemo(() => { fact(number) }, [number]);

    return <React.Fragment>
        <h4>Calc Component - Counter Value:{count}</h4>
        <button onClick={() => {
            setCount(count + 1)
        }}>INCR</button>
        <hr />
        <h5>Number : {number}</h5>
        <button onClick={() => { setNumber(number + 1) }}>Fact Incr</button>
        <h4>Factorial of give number is :{factEx}</h4>
    </React.Fragment>
}

let fact = (n) => {
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact = fact * i
    }
    console.log("Factorial of give number is ", fact)
    return fact
}
export default Calc;
