import { CreditCard, User } from "../models/index.js";
import responseBody from "../helpers/response-body.js";

class UserService {

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
            return new responseBody.Success(users);
        } catch (err) {
            return new responseBody.BadRequestError([], err.message);
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
            return new responseBody.Success(user);
        } catch (err) {
            return new responseBody.NotFoundError([{
                message: "Sorry! User NOT Found",
                path: uuid
            }]);
        }
    }

    async create(requestBody) {
        try {
            const user = await User.create(requestBody);
            return new responseBody.Created(user, "User created successfully");
        } catch (err) {
            return new responseBody.ValidationError(err);
        }
    }

    async update(uuid, requestBody) {
        try {
            await User.update(requestBody, {
                where: { uuid }
            });
            return new responseBody.Success({ uuid }, "User updated successfully");
        } catch (err) {
            if (err.name == "SequelizeValidationError") {
                return new responseBody.ValidationError(err);
            }

            return new responseBody.NotFoundError([{
                message: "Sorry! User NOT Found",
                path: uuid
            }]);
        }
    }

    async delete(uuid) {
        try {
            await User.destroy({
                where: { uuid }
            });
            return new responseBody.Success({ uuid }, "User removed successfully");
        } catch (error) {
            return new responseBody.NotFoundError([{
                message: "Sorry! User NOT Found",
                path: uuid
            }]);
        }
    }
}

const userService = new UserService();
export default userService;