module.exports = function (sequelize, DataTypes) {
  var Pictures = sequelize.define("Pictures", {
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    instagram: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Pictures.associate = function (models) {
    Pictures.belongsTo(models.Cameras, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Pictures;
};
