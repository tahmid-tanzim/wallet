import httpStatusCodes from "http-status-codes";
import userService from "../services/user-services.js";

class UserController {
     async get(req, res, next) {
        let result;
        try {
            result = await userService.getOne(req.params.userUUID);
            return res.status(httpStatusCodes.OK).send(result);
        } catch (error) {
            throw new Error(error);
        }
    };
    
    async list(req, res, next) {
        let result;
        try {
            result = await userService.getAll();
            return res.status(httpStatusCodes.OK).send(result);
        } catch (error) {
            throw new Error(error);
        }
    };
    
    async create(req, res, next) {
        let result;
        try {
            result = await userService.create(req.body);
            return res.status(httpStatusCodes.CREATED).send(result);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(req, res, next) {
        try {
            await userService.update(req.params.userUUID, req.body);
            return res.status(httpStatusCodes.OK).send({message: "User updated successfully"});
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(req, res, next) {
        try {
            await userService.delete(req.params.userUUID);
            return res.status(httpStatusCodes.OK).send({message: "User deleted successfully"});
        } catch (error) {
            throw new Error(error);
        }
    }
};

const userController = new UserController();
export default userController;

