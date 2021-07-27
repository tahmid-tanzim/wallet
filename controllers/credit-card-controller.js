import httpStatusCodes from "http-status-codes";
import creditCardService from "../services/credit-card-services.js";

class CreditCardController {
    async getAllByUser(req, res, next) {
        let result;
        try {
            result = await creditCardService.getAll(req.params.userUUID);
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
};

const creditCardController = new CreditCardController();
export default creditCardController;

