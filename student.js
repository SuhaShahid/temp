const { Sequelize } = require("sequelize");
const { DataTypes,Op } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "Student",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [5, 10] },
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 18, 
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false, 
    }
  );
  return Students;
};
