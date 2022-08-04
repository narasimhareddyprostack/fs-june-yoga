function add(a, b, c) {
    console.log(a)
    console.log(b)
    c()
}
add(10, 20, () => {
    console.log("Hello,GM")
});