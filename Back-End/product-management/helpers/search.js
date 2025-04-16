module.exports = (query) => {
    let objectSearch = {
        keyword: "",
        regex: ""
    }
    if(query.keyword){
        objectSearch.keyword = query.keyword;
        const regex = new RegExp(objectSearch.keyword, "i"); // tìm kiếm từ trên web
        objectSearch.regex = regex;
    }
    return objectSearch;
}
