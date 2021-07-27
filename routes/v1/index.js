import express from "express";
import httpStatusCodes from "http-status-codes";

const router = express.Router();

router.get("/", async (req, res, next) => {
      return res.status(httpStatusCodes.OK).send({ message: "Welcome to WALLET Application" });
});

export default router;
