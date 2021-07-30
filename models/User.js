const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      // Preventing from creating a duplicate in the DB
      unique: true,
      // checks for email format
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[8,12],
      }
    },
  },
  {
    hooks: {
      beforeCreate: async (createUser) => {
        createUser.password = await bcrypt.hash(createUser.password, 10);
        return createUser;
      }
    }
  }
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
