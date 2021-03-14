const sequelizeDb = require('../sequelize/models/index');
const courseModel = require('../sequelize/models/course.model');
sequelizeDb.sequelize.sync();
const Course = sequelizeDb.Course

const getAll = (req, res) => {
    Course.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

const getById = (req, res) => {
    const id = req.params.id

    Course.findByPk(id).then(data => {
        res.json(data)
    })
}

const createCourse = (req, res) => {

    if (!req.body.name || !req.body.prof) {
        return res.status(400).json({
            message: "Bad request!"
        });
    }

    Course.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the Course."
            });
        });
}

const updateCourse = (req, res) => {
    const id = req.params.id

    Course.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.json({
                    message: "Course was updated successfully."
                });
            } else {
                res.json({
                    message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Error updating Course with id=" + id
            });
        });
}

const deleteCourse = (req, res) => {
    const id = req.params.id

    Course.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.json({
                    message: "Course was deleted successfully!"
                });
            } else {
                res.json({
                    message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not delete Course with id=" + id
            });
        });
}

module.exports = {
    getAll,
    getById,
    createCourse,
    updateCourse,
    deleteCourse
}