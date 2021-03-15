const sequelizeDb = require('../sequelize/models/index');
const productModel = require('../sequelize/models/product.model');
sequelizeDb.sequelize.sync();
const Product = sequelizeDb.Product

const getAll = (req, res) => {
    Product.findAll()
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

    Product.findByPk(id).then(data => {
        res.json(data)
    })
}

const createProduct = (req, res) => {
    Product.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        });
}

const updateProduct = (req, res) => {
    const id = req.params.id

    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.json({
                    message: "Product was updated successfully."
                });
            } else {
                res.json({
                    message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Error updating Product with id=" + id
            });
        });
}

const deleteProduct = (req, res) => {
    const id = req.params.id

    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.json({
                    message: "Product was deleted successfully!"
                });
            } else {
                res.json({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Could not delete Product with id=" + id
            });
        });
}

module.exports = {
    getAll,
    getById,
    createProduct,
    updateProduct,
    deleteProduct
}