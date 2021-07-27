import creditCardService from "../services/credit-card-service.js";

class CreditCardController {
    async getOne(req, res, next) {
        const result = await creditCardService.getOne(req.params.creditCardUUID);
        return res.status(result.statusCode).send(result);
    }

    async getAll(req, res, next) {
        const result = await creditCardService.getAll();
        return res.status(result.statusCode).send(result);
    };

    async getAllByUser(req, res, next) {
        const result = await creditCardService.getAllByUser(req.params.userUUID);
        return res.status(result.statusCode).send(result);
    }

    async createByUser(req, res, next) {
        const result = await creditCardService.create(req.params.userUUID, req.body);
        return res.status(result.statusCode).send(result);
    }

    async update(req, res, next) {
        const result = await creditCardService.update(req.params.creditCardUUID, req.body);
        return res.status(result.statusCode).send(result);
    }

    async delete(req, res, next) {
        const result = await creditCardService.delete(req.params.creditCardUUID);
        return res.status(result.statusCode).send(result);
    }
};

const creditCardController = new CreditCardController();
export default creditCardController;

