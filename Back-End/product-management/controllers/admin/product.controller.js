const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");

// [GET] /admin/products : Hiển thị danh sách
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

    const products = await Product.find(find)
        .sort({ position : "desc" })
        .limit(objectPagination.limiteItems)
        .skip(objectPagination.skip);
    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
};
//[PATCH] /admin/products/change-status/:status/:id'
module.exports.changeStatus = async (req, res) => {

    const status = req.params.status;
    const id = req.params.id;
    await Product.updateOne({_id: id}, {status: status});
   res.redirect("back");
};

//[PATCH] /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(",").map(id => id.trim());

    switch (type) {
        case "active":
            await Product.updateMany({_id: {$in: ids } }, {status: "active"} );
            break;
        case "inactive":
            await Product.updateMany({_id: {$in: ids } }, {status: "inactive"} );
            break;
        case "delete-all":
            await Product.updateMany({_id: {$in: ids } }, {
                deleted: true, 
                deletedAt: new Date(),
            });
            break;
        case "change-position":
            for (const item of ids) {
                let [id, position] = item.split("-");
                position = parseInt(position);
                await Product.updateOne({_id: id}, {
                    position: position
                });
            }
            break;
        default:
            break;
    }
    res.redirect("back");
};

//[DELETE] /admin/products/delete/:id'
module.exports.deleteItem = async (req, res) => {
    const id = req.params.id;
    // await Product.deleteOne({_id: id});
    await Product.updateOne({_id: id}, { 
        deleted: true,
        deletedAt: new Date()
    });
    res.redirect("back");
};
