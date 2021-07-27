import httpStatusCodes from "http-status-codes";
import userService from "../services/user-service.js";

class UserController {
    async get(req, res, next) {
        try {
            const result = await userService.getOne(req.params.userUUID);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    };

    async list(req, res, next) {
        try {
            const result = await userService.getAll();
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    };

    async create(req, res, next) {
        try {
            const result = await userService.create(req.body);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }

    async update(req, res, next) {
        try {
            const result = await userService.update(req.params.userUUID, req.body);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }

    async delete(req, res, next) {
        try {
            const result = await userService.delete(req.params.userUUID);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }
};

const userController = new UserController();
export default userController;

