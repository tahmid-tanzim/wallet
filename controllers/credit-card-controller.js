import creditCardService from "../services/credit-card-service.js";

class CreditCardController {
    async getOne(req, res, next) {
        try {
            const result = await creditCardService.getOne(req.params.creditCardUUID);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const result = await creditCardService.getAll();
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    };

    async getAllByUser(req, res, next) {
        try {
            const result = await creditCardService.getAllByUser(req.params.userUUID);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }

    async createByUser(req, res, next) {
        try {
            const result = await creditCardService.create(req.params.userUUID, req.body);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }

    async update(req, res, next) {
        try {
            const result = await creditCardService.update(req.params.creditCardUUID, req.body);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }

    async delete(req, res, next) {
        try {
            const result = await creditCardService.delete(req.params.creditCardUUID);
            return res.status(result.statusCode).send(result);
        } catch (error) {
            return res.status(error.statusCode).send(error);
        }
    }
};

const creditCardController = new CreditCardController();
export default creditCardController;

