function add(a, b, c = 20) {
    console.log(a + b + c)
}

add(10, 20, 30) // 60
add(1, 2, 3)    //6
add(1)          //NAN
add(1, 2)       //23