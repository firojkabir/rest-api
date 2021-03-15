const sequelizeDb = require('../sequelize/models/index');
const bookModel = require('../sequelize/models/book.model');
sequelizeDb.sequelize.sync();
const Book = sequelizeDb.Book

const getAll = (req, res) => {
    Book.findAll()
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

    Book.findByPk(id).then(data => {
        res.json(data)
    })
}

const createBook = (req, res) => {
    Book.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the Book."
            });
        });
}

const updateBook = (req, res) => {
    const id = req.params.id

    Book.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.json({
                    message: "Book was updated successfully."
                });
            } else {
                res.json({
                    message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Error updating Book with id=" + id
            });
        });
}

const deleteBook = (req, res) => {
    const id = req.params.id

    Book.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.json({
                    message: "Book was deleted successfully!"
                });
            } else {
                res.json({
                    message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not delete Book with id=" + id
            });
        });
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook
}