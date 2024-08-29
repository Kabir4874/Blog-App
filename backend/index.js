const express = require("express");
const { dbConnect } = require("./utils/db");
require("dotenv").config();
const blogRoutes = require("./routes/blog.route");
const commentRoutes = require("./routes/comment.route");
const authRoutes = require("./routes/auth.route");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Blog App Server is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${process.env.PORT}`);
});
dbConnect();
