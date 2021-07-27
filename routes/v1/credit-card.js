import express from "express";
import httpStatusCodes from "http-status-codes";
import creditCardController from "../../controllers/credit-card-controller.js";
import creditCardService from "../../services/credit-card-services.js";

const creditCardRouter = express.Router({mergeParams: true});

// GET ONE User
// creditCardRouter.get("/:creditCardUUID", async (req, res, next) => {
//     let result;
//     try {
//         result = await userService.getOne(req.params.creditCardUUID);
//         return res.status(httpStatusCodes.OK).send(result);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// GET ALL CreditCards of a User
creditCardRouter.get("/", creditCardController.getAllByUser);

// CREATE ONE CreditCard to a User
creditCardRouter.post("/", creditCardController.createByUser);

// UPDATE ONE User
// creditCardRouter.put("/:creditCardUUID", async (req, res, next) => {
//     try {
//         await userService.update(req.params.creditCardUUID, req.body);
//         return res.status(httpStatusCodes.OK).send({message: "User updated successfully"});
//     } catch (error) {
//         throw new Error(error);
//     }
// });

// DELETE ONE User
// creditCardRouter.delete("/:creditCardUUID", async (req, res, next) => {
//     try {
//         await userService.delete(req.params.creditCardUUID);
//         return res.status(httpStatusCodes.OK).send({message: "User deleted successfully"});
//     } catch (error) {
//         throw new Error(error);
//     }
// });

export default creditCardRouter;
