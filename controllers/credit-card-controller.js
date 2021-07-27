import httpStatusCodes from "http-status-codes";
import creditCardService from "../services/credit-card-service.js";

class CreditCardController {
    async getOne(req, res, next) {
        let result;
        try {
            result = await creditCardService.getOne(req.params.creditCardUUID);
            return res.status(httpStatusCodes.OK).send(result);
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAll(req, res, next) {
        let result;
        try {
            result = await creditCardService.getAll();
            return res.status(httpStatusCodes.OK).send(result);
        } catch (error) {
            throw new Error(error);
        }
    };

    async getAllByUser(req, res, next) {
        let result;
        try {
            result = await creditCardService.getAllByUser(req.params.userUUID);
            return res.status(httpStatusCodes.OK).send(result);
        } catch (error) {
            throw new Error(error);
        }
    }

    async createByUser(req, res, next) {
        let result;
        try {
            result = await creditCardService.create(req.params.userUUID, req.body);
            return res.status(httpStatusCodes.CREATED).send(result);
        } catch (error) {
            throw new Error(error);
            // return res.status(httpStatusCodes.BAD_REQUEST).send({message: 'Baaad Request'});
        }
    }

    async update(req, res, next) {
        try {
            await creditCardService.update(req.params.creditCardUUID, req.body);
            return res.status(httpStatusCodes.OK).send({ message: "Credit Card updated successfully" });
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(req, res, next) {
        try {
            await creditCardService.delete(req.params.creditCardUUID);
            return res.status(httpStatusCodes.OK).send({ message: "Credit Card deleted successfully" });
        } catch (error) {
            throw new Error(error);
        }
    }
};

const creditCardController = new CreditCardController();
export default creditCardController;

