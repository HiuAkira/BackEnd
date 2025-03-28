const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project-01');
const Product = mongoose.model('Product', {
    title: String,
    price: Number,
    thumbnail: String
});

const app = express();
const port = 3000;

app.set('views','./views');
app.set('view engine', 'pug');

app.use(express.static("public")); 

app.get('/', (req, res) => {
    res.render("index.pug", {
        titlePage: "Trang chủ",
        message: "Hello there!"
    });
    //     title: "Hey",
    //     messagae: "Hello there!"
    // });
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Đảm bảo có file contact.pug trong thư mục views
});

app.get('/', (req, res) => {
    res.send("<h1>Trang chủ</h1>");
});

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render("products", {
        titlePage: "Danh sách sản phẩm",
        products: products
    });
});

app.get('/blog', (req, res) => {
    res.send("<h1>Trang danh sách bài viết</h1>");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});