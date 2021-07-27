import { CreditCard, User } from "../models/index.js";
import exceptions from "../helpers/errors/exceptions.js";

class UserService {

    async init() {

    }

    async getAll() {
        try {
            const users = await User.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: CreditCard,
                        as: 'credit_cards',
                        attributes: ['uuid', 'number', 'type']
                    }
                ]
            });
            return users;
        } catch (error) {
            throw new exceptions.NotFoundError(error)
        }
    }

    async getOne(uuid) {
        try {
            const user = await User.findOne({
                where: { uuid },
                include: [
                    {
                        model: CreditCard,
                        as: 'credit_cards',
                        attributes: ['uuid', 'number', 'type', 'credit_limit', 'expire_date']
                    }
                ]
            });
            return user;
        } catch (error) {
            throw new exceptions.NotFoundError(error)
        }
    }

    async create(requestBody) {
        try {
            const user = await User.create(requestBody);
            return user;
        } catch (error) {
            throw new exceptions.BadRequestError(error)
        }
    }

    async update(uuid, requestBody) {
        try {
            await User.update(requestBody, {
                    where: { uuid }
                });
        } catch (error) {
            throw new exceptions.BadRequestError(error)
        }
    }

    async delete(uuid) {
        try {
            await User.destroy({
                where: { uuid }
            });
        } catch (error) {
            throw new exceptions.BadRequestError(error)
        }
    }

    async getUsersFails() {
        throw new exceptions.NotFoundError("Getting users Failed for some reason")
    }
}


const userService = new UserService();
export default userService;