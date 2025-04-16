module.exports = (objectPagination, query, countProducts) => {
    if(query.page){
        objectPagination.currentPage = parseInt(query.page);
    }
    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limiteItems;
    const totalPage = Math.ceil(countProducts/objectPagination.limiteItems);
    objectPagination.totalPage = totalPage;
    return objectPagination;
}