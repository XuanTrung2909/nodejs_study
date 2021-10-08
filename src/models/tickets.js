"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class tickets extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ users, movies }) {
            // define association here
            this.belongsTo(users, { foreignKey: "userId" });
            this.belongsTo(movies, { foreignKey: "movieId" });
        }
    }
    tickets.init(
        {
            userId: DataTypes.INTEGER,
            movieId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "tickets",
        }
    );
    return tickets;
};
