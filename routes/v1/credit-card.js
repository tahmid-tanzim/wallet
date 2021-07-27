import express from "express";
import creditCardController from "../../controllers/credit-card-controller.js";

const creditCardRouter = {
    parentNode: express.Router(),
    leafNode: express.Router({ mergeParams: true })
};

// GET ONE CreditCard
creditCardRouter.parentNode.get("/:creditCardUUID", creditCardController.getOne);

// GET ONE CreditCard of a User
creditCardRouter.leafNode.get("/:creditCardUUID", creditCardController.getOne);

// GET ALL CreditCards
creditCardRouter.parentNode.get("/", creditCardController.getAll);

// GET CreditCards of a User
creditCardRouter.leafNode.get("/", creditCardController.getAllByUser);

// CREATE ONE CreditCard to a User
creditCardRouter.leafNode.post("/", creditCardController.createByUser);

// UPDATE ONE CreditCard
creditCardRouter.parentNode.put("/:creditCardUUID", creditCardController.update);

// UPDATE ONE CreditCard of a User
creditCardRouter.leafNode.put("/:creditCardUUID", creditCardController.update);

// DELETE ONE CreditCard
creditCardRouter.parentNode.delete("/:creditCardUUID", creditCardController.delete);

// DELETE ONE CreditCard of a User
creditCardRouter.leafNode.delete("/:creditCardUUID", creditCardController.delete);

export default creditCardRouter;
