//action types 
const INCR = 'INCR'
const DECR = 'DECR'
//actions
let incrAction = () => {
    console.log("incr Action - redux action file")
    return { type: INCR }
}
let decrAction = () => {
    return {
        type: DECR
    }
}
export { INCR, DECR, incrAction, decrAction }