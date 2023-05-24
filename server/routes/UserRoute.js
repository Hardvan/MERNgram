// "/user" route

import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("User Route");
});

export default router;
