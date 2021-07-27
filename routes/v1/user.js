import express from "express";
import httpStatusCodes from "http-status-codes";
import userService from "../../services/user-services.js";
import creditCardRouter from "./credit-card.js"
const userRouter = express.Router();

// const creditCardRouter = express.Router({mergeParams: true});

userRouter.use('/:userUUID/credit-cards', creditCardRouter);

// GET ONE User
userRouter.get("/:userUUID", async (req, res, next) => {
    let result;
    try {
        result = await userService.getOne(req.params.userUUID);
        return res.status(httpStatusCodes.OK).send(result);
    } catch (error) {
        throw new Error(error);
    }
});

// GET ALL Users
userRouter.get("/", async (req, res, next) => {
    let result;
    try {
        result = await userService.getAll();
        return res.status(httpStatusCodes.OK).send(result);
    } catch (error) {
        throw new Error(error);
    }
});

// CREATE ONE User
userRouter.post("/", async (req, res, next) => {
    let result;
    try {
        result = await userService.create(req.body);
        return res.status(httpStatusCodes.CREATED).send(result);
    } catch (error) {
        throw new Error(error);
        // return res.status(httpStatusCodes.BAD_REQUEST).send({message: 'Baaad Request'});
    }
});

// UPDATE ONE User
userRouter.put("/:userUUID", async (req, res, next) => {
    try {
        await userService.update(req.params.userUUID, req.body);
        return res.status(httpStatusCodes.OK).send({message: "User updated successfully"});
    } catch (error) {
        throw new Error(error);
    }
});

// DELETE ONE User
userRouter.delete("/:userUUID", async (req, res, next) => {
    try {
        await userService.delete(req.params.userUUID);
        return res.status(httpStatusCodes.OK).send({message: "User deleted successfully"});
    } catch (error) {
        throw new Error(error);
    }
});

// userRouter.get("/error", async (req, res, next) => {
//     let result;
//     try {
//         result = await userService.getUsersFails();
//         return res.status(httpStatusCodes.OK).send({ message: result });
//     } catch (error) {
//         return res.status(error.errorCode).send(error.message);
//     }
// });

export default userRouter;
