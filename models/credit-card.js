import Sequelize from "sequelize";
import sequelize from "../database/adaptor.js";

const { Model, DataTypes } = Sequelize;

class CreditCard extends Model {
  toJSON() {
    return { ...this.get(), id: undefined, userId: undefined };
  }
};

CreditCard.init({
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      notNull: { msg: 'Credit Card number required' },
      notEmpty: { msg: 'Credit Card number must not be empty' },
      isCreditCard: { msg: 'Credit Card number must be valid' }
    }
  },
  type: {
    type: DataTypes.ENUM({
      values: ['American Express', 'Visa', 'Mastercard']
    }),
    allowNull: false
  },
  credit_limit: {
    type: DataTypes.DECIMAL(10, 2), // NUMERIC(precision = 10, scale = 2)
    allowNull: true
  },
  expire_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    validate: {
      isDate: { msg: 'Valid date format YYYY-MM-DD required' }
    }
  }
}, {
  sequelize,
  tableName: 'credit_cards',
  modelName: 'CreditCard',
});

export default CreditCard;