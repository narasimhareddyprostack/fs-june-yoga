let marks = [34, 35, 36, 37]

/* marks.forEach((m, i) => {
    console.log(m, i)
}) */
let new_Marks = marks.forEach((mark) => {
    //console.log(mark + 100)
    return mark + 1
})
console.log(marks)
console.log(new_Marks)

