const express = require("express");
const { dbConnect } = require("./utils/db");
require("dotenv").config();
const blogRoutes = require("./routes/blog.route");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Blog App Server is running");
});

app.use("/api/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${process.env.PORT}`);
});
dbConnect();
