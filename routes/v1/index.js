import express from "express";
import httpStatusCodes from "http-status-codes";

const router = express.Router();

router.get("/", async (req, res, next) => {
      return res.send("Hello World");
});

export default router;
