let contact = {
    name: {
        first_Name: "Rahul",
        last_Name: "Gandhi"
    },
    id: 101,
    loc: ['Wayanad', 'New Delhi'],
    sal: 45000
}
console.log(contact.name.first_Name)
let { name } = contact
let { first_Name } = name
console.log(first_Name)