const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");

// [GET] /admin/products
module.exports.index = async (req, res) => {
    //console.log(req.query.status);

    const filterStatus = filterStatusHelper(req.query);

    // console.log(filterStatus);

    let find = {
        deleted: false
    }
    if(req.query.status){
         find.status = req.query.status;
    }

    // Tìm kiếm
    const objectSearch = searchHelper(req.query);
    // console.log(objectSearch);
    if(objectSearch.regex){
        find.title = objectSearch.regex;
    }
    // let keyword = "";
    // if(req.query.keyword){
    //     keyword = req.query.keyword;
    //     const regex = new RegExp(keyword, "i"); // tìm kiếm từ trên web
    //     find.title =  regex;
    // }


    // Pagination

    const countProducts = await Product.countDocuments(find);
    let objectPagination = paginationHelper (
        {
            currentPage: 1,
            limiteItems: 4
        },
        req.query,
        countProducts
    );

    const products = await Product.find(find).limit(objectPagination.limiteItems).skip(objectPagination.skip);
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};