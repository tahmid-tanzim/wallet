import { CreditCard, User } from "../models/index.js";
import responseBody from "../helpers/response-body.js";

class CreditCardService {

    async getAll() {
        try {
            const creditCards = await CreditCard.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: User,
                        as: 'user',
                        attributes: ['uuid', 'first_name', 'last_name', 'email']
                    }
                ]
            });
            return new responseBody.Success(creditCards);
        } catch (err) {
            return new responseBody.BadRequestError([], err.message);
        }
    }

    async getAllByUser(userUUID) {
        try {
            const user = await User.findOne({
                where: { uuid: userUUID },
                attributes: {
                    exclude: ['uuid', 'first_name', 'last_name', 'email', 'date_of_birth', 'createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: CreditCard,
                        as: 'credit_cards'
                    }
                ]
            });
            return new responseBody.Success(user.credit_cards);
        } catch (err) {
            return new responseBody.NotFoundError([{
                message: "Sorry! User NOT Found",
                path: userUUID
            }]);
        }
    }

    async getOne(uuid) {
        try {
            const creditCard = await CreditCard.findOne({
                where: { uuid },
                include: [
                    {
                        model: User,
                        as: 'user',
                        attributes: ['uuid', 'first_name', 'last_name', 'email', 'date_of_birth']
                    }
                ]
            });
            return new responseBody.Success(creditCard);
        } catch (err) {
            return new responseBody.NotFoundError([{
                message: "Sorry! Credit Card NOT Found",
                path: uuid
            }]);
        }
    }

    async create(userUUID, requestBody) {
        try {
            const user = await User.findOne({
                where: { uuid: userUUID },
                attributes: ['id']
            });

            const credit_card = await CreditCard.create({ ...requestBody, userId: user.id });
            return new responseBody.Created(credit_card, "Credit Card created successfully");
        } catch (err) {
            if (err.name == "SequelizeValidationError") {
                return new responseBody.ValidationError(err);
            }

            return new responseBody.NotFoundError([{
                message: "Sorry! User NOT Found",
                path: userUUID
            }]);
        }
    }

    async update(uuid, requestBody) {
        try {
            await CreditCard.update(requestBody, {
                where: { uuid }
            });
            return new responseBody.Success({ uuid }, "Credit Card updated successfully");
        } catch (err) {
            if (err.name == "SequelizeValidationError") {
                return new responseBody.ValidationError(err);
            }

            return new responseBody.NotFoundError([{
                message: "Sorry! Credit Card NOT Found",
                path: uuid
            }]);
        }
    }

    async delete(uuid) {
        try {
            await CreditCard.destroy({
                where: { uuid }
            });
            return new responseBody.Success({ uuid }, "Credit Card removed successfully");
        } catch (err) {
            return new responseBody.NotFoundError([{
                message: "Sorry! Credit Card NOT Found",
                path: uuid
            }]);
        }
    }
}

const creditCardService = new CreditCardService();
export default creditCardService;