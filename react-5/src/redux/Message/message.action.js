//action types 
const GM = "GM"
const GN = 'GN'
//actions
let gmAction = () => {
    console.log("Breakfast - gm Action")
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}
export { GM, GN, gmAction, gnAction }
//what is action?
//action is a fuction, return actionable object