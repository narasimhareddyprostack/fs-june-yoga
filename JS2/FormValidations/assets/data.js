function validate() {
    //ui business logic
    let email = document.getElementById('email').value
    //console.log(email)
    let password = document.getElementById('password').value
    //console.log(password)

    if (email == "") {
        console.log("Test Case123")
        document.getElementById('emailMessage').innerHTML = "Please Enter Email ID"
    }
    if (password == "") {
        document.getElementById('passwordMessage').innerHTML = "Please Enter Password"
    }

    return false
}