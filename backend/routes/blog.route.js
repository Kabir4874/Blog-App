const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();

router.post("/create-post", blogController.create_post);
router.get("/", blogController.get_blogs);

module.exports = router;
