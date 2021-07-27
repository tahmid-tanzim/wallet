import { CreditCard, User } from "../models/index.js";
import exceptions from "../helpers/errors/exceptions.js";

class CreditCardService {

    async init() {

    }

    async getAll(userUUID) {
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
            throw new exceptions.NotFoundError(error)
        }
    }

    // async getOne(uuid) {
    //     try {
    //         const user = await User.findOne({
    //             where: { uuid },
    //             include: [
    //                 {
    //                     model: CreditCard,
    //                     as: 'credit_cards',
    //                     attributes: ['uuid', 'number', 'type', 'credit_limit', 'expire_date']
    //                 }
    //             ]
    //         });
    //         return user;
    //     } catch (error) {
    //         throw new exceptions.NotFoundError(error)
    //     }
    // }

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
            throw new exceptions.BadRequestError(error)
        }
    }

    // async update(uuid, requestBody) {
    //     try {
    //         await User.update(requestBody, {
    //                 where: { uuid }
    //             });
    //     } catch (error) {
    //         throw new exceptions.BadRequestError(error)
    //     }
    // }

    // async delete(uuid) {
    //     try {
    //         await User.destroy({
    //             where: { uuid }
    //         });
    //     } catch (error) {
    //         throw new exceptions.BadRequestError(error)
    //     }
    // }

    // async getUsersFails(){
    //     throw new exceptions.NotFoundError("Getting users Failed for some reason")
    // }
}


const creditCardService = new CreditCardService();
export default creditCardService;