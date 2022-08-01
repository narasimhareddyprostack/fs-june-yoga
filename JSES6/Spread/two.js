let user = {
    id: 101,
    name: "Rahul",
    email: "Rahul@gmail.com"
}
let detaisl = {
    email: "rahul@ibm.com",
    sal: 45000
}
let user_Details = { ...user, ...detaisl }
console.log(user_Details)