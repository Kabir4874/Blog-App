const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();

router.post("/create-post", blogController.create_post);
router.get("/", blogController.get_blogs);
router.get("/:id", blogController.get_blog_by_id);
router.patch("/update-post/:id", blogController.update_blog);

module.exports = router;
