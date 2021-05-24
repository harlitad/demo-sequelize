const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./../config/database");
const Forum = require("./forum");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    // nama table "Users"
    modelName: "User", // We need to choose the model name
    tableName: "users",
    //   timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

User.hasMany(Forum, {
  foreignKey: "creator",
});
Forum.belongsTo(User, {
  foreignKey: "id",
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = User;
