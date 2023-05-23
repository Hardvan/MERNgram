import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Set up MongoDB connection
const mongodb_string = process.env.MONGODB_STRING;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(mongodb_string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });