class Account {
    constructor() {
        console.log("Account Class - Constructor")
    }
}
class SA extends Account {
    constructor() {
        super()
        console.log("SA-Class constructor method")
    }
}
new SA()