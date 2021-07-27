import express from "express";
import userController from "../../controllers/user-controller.js";
import creditCardRouter from "./credit-card.js"
const userRouter = express.Router();

userRouter.use("/:userUUID/credit-cards", creditCardRouter.leafNode);

// GET ONE User
userRouter.get("/:userUUID", userController.get);

// GET ALL Users
userRouter.get("/", userController.list);

// CREATE ONE User
userRouter.post("/", userController.create);

// UPDATE ONE User
userRouter.put("/:userUUID", userController.update);

// DELETE ONE User
userRouter.delete("/:userUUID", userController.delete);

export default userRouter;