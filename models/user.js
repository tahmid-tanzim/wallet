import Sequelize from "sequelize";
import sequelize from "../database/adaptor.js";

const { Model, DataTypes } = Sequelize;

class User extends Model {
  toJSON() {
    return { ...this.get(), id: undefined };
  }
};

User.init({
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'First Name required' },
      notEmpty: { msg: 'First Name must not be empty' },
    }
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Last Name required' },
      notEmpty: { msg: 'Last Name must not be empty' },
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: { msg: 'Email address must be valid' }
    }
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'users',
  modelName: 'User',
});

export default User;