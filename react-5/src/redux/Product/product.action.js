//action tupes
const INCR_QTY = 'INCR_QTY'
const DECR_QTY = 'DECR_QTY'
//actions
let incr_QYT_Action = () => {
    return { type: INCR_QTY }
}
let decr_QTY_Action = () => {
    return { type: DECR_QTY }
}
export { INCR_QTY, DECR_QTY, incr_QYT_Action, decr_QTY_Action }