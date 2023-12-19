module.exports={
    paginate: (page, limit, count) => {
        let totalPages = Math.ceil(count/limit)
        pageNumber = page > totalPages ? totalPages : page
        let offset = (page - 1) * limit
        return { totalPages, pageNumber, offset }
    },
}
