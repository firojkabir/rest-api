const db = require('./db')

const getAll = (req, res) => {
    db.query('SELECT * FROM courses', function (err, results) {
        if (err) throw err
        return res.json({
            message: "All the courses find out successfully",
            data: results
        })
    })
}

const getById = (req, res) => {
    const id = req.params.id

    db.query(`SELECT * FROM courses WHERE id = ${id}`, function (err, results) {
        if (err) throw err
        if (results.length == 0) {
            return res.json({
                message: `ID-${id} Not found`
            })
        } else {
            return res.json({
                message: `Find out course  with ID-${id} successfully`,
                data: results[0]
            })
        }
    })
}

const createCourse = (req, res) => {
    db.query(`INSERT INTO courses (name, prof) VALUES ('${req.body.name}','${req.body.prof}')`, function (err, results) {
        if (err) throw err
        return res.json({
            message: "New course inserted successfully",
            data: results[0]
        })
    })
}

const updateCourse = (req, res) => {
    const id = req.params.id

    db.query(`SELECT * FROM courses WHERE id = ${id}`, function (err, results) {
        if (err) throw err
        if (results.length == 0) {
            return res.json({
                message: `ID-${id} Not found`
            })
        } else {
            db.query(`UPDATE courses SET name='${req.body.name}', prof='${req.body.prof}' WHERE id = ${id}`, function (err, results) {
                if (err) throw err
                return res.json({
                    message: `Updated course with id ${id} successfully`,
                    data: results[0]
                })
            })
        }
    })
}

const deleteCourse = (req, res) => {
    const id = req.params.id

    db.query(`SELECT * FROM courses WHERE id = ${id}`, function (err, results) {
        if (err) throw err
        if (results.length == 0) {
            return res.json({
                message: `ID-${id} Not found`
            })
        } else {
            db.query(`DELETE FROM courses WHERE id = ${id}`, function (err, results) {
                if (err) throw err
                return res.json({
                    message: `Deleted course with ID-${id} successfully`
                })
            })
        }
    })
}

module.exports = {
    getAll,
    getById,
    createCourse,
    updateCourse,
    deleteCourse
}