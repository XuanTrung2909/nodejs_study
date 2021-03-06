"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ tickets }) {
            // define association here
            this.hasMany(tickets, { foreignKey: "userId" });
        }
    }
    users.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,
            role: DataTypes.STRING,
            avatar: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "users",
        }
    );
    return users;
};
