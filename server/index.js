import express from "express";
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Payawal.1125",
    database: "funko"
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// -----------------------create---------------------------- 
app.post("/insertProducts", (req, res) => {
    const q = "INSERT INTO `funko`.`products` (`category`,`license`,`product_name`, `product_no`, `product_description`, `price`, `product_img1`, `product_img2`) VALUES (?);"
    const values = [
        req.body.category,
        req.body.license,
        req.body.product_name,
        req.body.product_no,
        req.body.product_description,
        req.body.price,
        req.body.product_img1,
        req.body.product_img2
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("new product created")
    })
})

// -----------------------read---------------------------- 
app.get("/products/details/:id", (req, res) => {
    const productId = req.params.id;
    const q = 'SELECT * FROM funko.products WHERE id = ?'
    db.query(q, [productId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// -----------------------update---------------------------- 
app.put("/updateProducts/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE `funko`.`products` SET `category` = ?, `license` = ?, `product_name` = ?, `product_no` = ?, `product_description` = ?, `price` = ?, `product_img1` = ?, `product_img2` = ? WHERE id = ?"
    const values = [
        req.body.category,
        req.body.license,
        req.body.product_name,
        req.body.product_no,
        req.body.product_description,
        req.body.price,
        req.body.product_img1,
        req.body.product_img2
    ]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("product updated sucessfully")
    })
})


// =========================================
app.put("/deleteProducts/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM `funko`.`products` WHERE (`id` = ?);"
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("product deleted sucessfully")
    })
})



app.listen(8080, () => {
    console.log('connected to backend SUCCESS')
})