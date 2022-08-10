let goToMovie = (success, failure) => {
    let amount = 200
    amount > 500 ? success("Go and Enjoy") : failure("Go to PSA")
}
goToMovie((msg) => { console.log(msg) }, (err) => { console.log(err) })