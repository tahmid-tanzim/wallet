import User from './user.js';
import CreditCard from './credit-card.js';

User.hasMany(CreditCard, { foreignKey: 'userId', as: 'credit_cards', onDelete: 'CASCADE' });
CreditCard.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export { User, CreditCard };