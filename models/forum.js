const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./../config/database");

class Forum extends Model {}

Forum.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    thumbnail: {
      type: DataTypes.TEXT,
    },
    creator: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM("active", "deactive"),
      defaultValue: "deactive",
    },
  },
  {
    sequelize, // We need to pass the connection instance
    // nama table "Forums"
    modelName: "Forum", // We need to choose the model name
    tableName: "forums",
    //   timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    // underscored: false, // userId
    underscored: true, // user_id
  }
);

// the defined model is the class itself
console.log(Forum === sequelize.models.Forum); // true

module.exports = Forum;
