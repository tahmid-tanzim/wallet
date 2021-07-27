import { CreditCard, User } from "../models/index.js";
// import exceptions from "../helpers/errors/exceptions.js";

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
            return creditCards;
        } catch (error) {
            // throw new exceptions.NotFoundError(error)
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

            return user.credit_cards;
        } catch (error) {
            // throw new exceptions.NotFoundError(error)
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
            return creditCard;
        } catch (error) {
            // throw new exceptions.NotFoundError(error)
        }
    }

    async create(userUUID, requestBody) {
        try {
            const user = await User.findOne({
                where: { uuid: userUUID },
                attributes: ['id']
            });
            
            const credit_card = await CreditCard.create({...requestBody, userId: user.id});
            return credit_card;
        } catch (error) {
            console.log("ERROR!! - ", JSON.stringify(error, null, 2))
            // throw new exceptions.BadRequestError(error)
        }
    }

    async update(uuid, requestBody) {
        try {
            await CreditCard.update(requestBody, {
                    where: { uuid }
                });
        } catch (error) {
            // throw new exceptions.BadRequestError(error)
        }
    }

    async delete(uuid) {
        try {
            await CreditCard.destroy({
                where: { uuid }
            });
        } catch (error) {
            // throw new exceptions.BadRequestError(error)
        }
    }
}


const creditCardService = new CreditCardService();
export default creditCardService;