import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
      return res.send("Welcome to WALLET Application");
});

export default router;
