const logger = (req, res, next) => {
    console.log(req.url, req.method)
    // console.log(req)
    next()
}

module.exports = logger