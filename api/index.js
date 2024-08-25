import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Mongodb in connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api/user", userRoutes);
