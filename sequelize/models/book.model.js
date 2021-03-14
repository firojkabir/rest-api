module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return Book;
};