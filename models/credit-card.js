import Sequelize from "sequelize";
import sequelize from "../database/adaptor.js";

const { Model, DataTypes } = Sequelize;
const VALID_CARD_TYPE = ['American Express', 'Visa', 'Mastercard'];

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
      values: VALID_CARD_TYPE
    }),
    allowNull: false,
    validate: {
      isValidCardType(value) {
        if (!VALID_CARD_TYPE.includes(value)) {
          throw new Error('Valid card types are - ' + VALID_CARD_TYPE.join(', '));
        }
      }
    }
  },
  credit_limit: {
    type: DataTypes.DECIMAL(10, 2), // PostgreSQL NUMERIC(precision = 10, scale = 2)
    allowNull: true,
    validate: {
      min: 1,
      max: 99999999.99
    }
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