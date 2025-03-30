const express = require('express');
const router = express.Router();
const controller = require("../../controllers/client/product.controller");

router.get('/', controller.index);

// router.get('/products/create', (req, res) => {
//     res.render("client/pages/products/index");
// });

// router.get('/products/edit', (req, res) => {
//     res.render("client/pages/products/index");
// });

module.exports = router;
