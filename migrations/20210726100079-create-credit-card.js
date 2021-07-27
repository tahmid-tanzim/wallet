'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('credit_cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      expire_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('credit_cards');
  }
};