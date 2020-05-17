module.exports = function (sequelize, DataTypes) {
  var Cameras = sequelize.define("Cameras", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });
  return Cameras;
};
