module.exports.index = (req, res) => {
    // res.send("Trang sản phẩm");
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách sản phẩm"
    });
};