const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();

router.post("/create-post", blogController.create_post);
router.get("/", async (req, res) => {
  console.log("Blog routes is here");
});

module.exports = router;
