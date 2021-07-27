import userService from "../services/user-service.js";

class UserController {
    async get(req, res, next) {
        const result = await userService.getOne(req.params.userUUID);
        return res.status(result.statusCode).send(result);
    };

    async list(req, res, next) {
        const result = await userService.getAll();
        return res.status(result.statusCode).send(result);
    };

    async create(req, res, next) {
        const result = await userService.create(req.body);
        return res.status(result.statusCode).send(result);
    }

    async update(req, res, next) {
        const result = await userService.update(req.params.userUUID, req.body);
        return res.status(result.statusCode).send(result);
    }

    async delete(req, res, next) {
        const result = await userService.delete(req.params.userUUID);
        return res.status(result.statusCode).send(result);
    }
};

const userController = new UserController();
export default userController;

