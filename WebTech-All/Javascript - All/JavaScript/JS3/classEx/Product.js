class Product {
    p_Id = "p101";
    p_Name = "Iphone 5s"

    get_Product() {
        return "Hello....."
    }
}
let p1 = new Product()
console.log(p1.p_Id)
console.log(p1.p_Name)
console.log(p1.get_Product())