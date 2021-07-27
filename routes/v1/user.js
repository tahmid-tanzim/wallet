import express from "express";
import httpStatusCodes from "http-status-codes";
import userService from "../../services/user-services.js";

const router = express.Router();

router.get("/:uuid", async (req, res, next) => {
    let result;
    try {
        result = await userService.getOne(req.params.uuid);
        return res.status(httpStatusCodes.OK).send(result);
    } catch (error) {
        throw new Error(error);
    }
});

router.get("/", async (req, res, next) => {
    let result;
    try {
        result = await userService.getAll();
        return res.status(httpStatusCodes.OK).send(result);
    } catch (error) {
        throw new Error(error);
    }
});

router.post("/", async (req, res, next) => {
    let result;
    try {
        result = await userService.create(req.body);
        return res.status(httpStatusCodes.CREATED).send(result);
    } catch (error) {
        throw new Error(error);
        // return res.status(httpStatusCodes.BAD_REQUEST).send({message: 'Baaad Request'});
    }
});

router.put("/:uuid", async (req, res, next) => {
    try {
        await userService.update(req.params.uuid, req.body);
        return res.status(httpStatusCodes.OK).send({message: "User updated successfully"});
    } catch (error) {
        throw new Error(error);
    }
});

router.delete("/:uuid", async (req, res, next) => {
    try {
        await userService.delete(req.params.uuid);
        return res.status(httpStatusCodes.OK).send({message: "User deleted successfully"});
    } catch (error) {
        throw new Error(error);
    }
});

// router.get("/error", async (req, res, next) => {
//     let result;
//     try {
//         result = await userService.getUsersFails();
//         return res.status(httpStatusCodes.OK).send({ message: result });
//     } catch (error) {
//         return res.status(error.errorCode).send(error.message);
//     }
// });

export default router;
