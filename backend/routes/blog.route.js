const express = require("express");
const blogController = require("../controllers/blog.controller");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/create-post", blogController.create_post);
router.get("/", blogController.get_blogs);
router.get("/:id", blogController.get_blog_by_id);
router.patch("/update-post/:id", blogController.update_blog);
router.delete("/:id", blogController.delete_blog);
router.get("/related/:id", blogController.get_related_blogs);

module.exports = router;
