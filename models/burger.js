// Export the Burger model for other files to use
module.exports = (sequelize, DataTypes) => {
    // Create a "Burger" model with the following configuration
    const Burgers = sequelize.define('Burgers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });
    return Burgers;
};