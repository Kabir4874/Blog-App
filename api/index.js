import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import { dbConnect } from "./utils/db.js";

const app = express();
dotenv.config();
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
dbConnect();

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
