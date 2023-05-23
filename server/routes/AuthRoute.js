import express from "express";

const router = express.Router();

// For "/auth" route
router.get("/", async (req, res) => {
  res.send("Hello from AuthRoute");
});

export default router;
