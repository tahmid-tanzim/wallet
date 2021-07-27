import express from "express";
import httpStatusCodes from "http-status-codes";
// import responseBody from "../../helpers/response-body.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
      return res.status(httpStatusCodes.OK).send({ message: "Welcome to WALLET Application" });
});

// router.get("/error", async (req, res, next) => {
//       try {
//             throw new responseBody.Success(null, "NOT Found");
//             // throw new responseBody.BadRequestError();
//       } catch (error) {
//             return res.status(error.statusCode).send(error);
//       }
// });

export default router;
