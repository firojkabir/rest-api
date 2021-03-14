module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("courses", {
        name: {
            type: Sequelize.STRING
        },
        prof: {
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

    return Course;
};