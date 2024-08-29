const express = require("express");
const commentController = require("../controllers/comment.controller");
const router = express.Router();

router.post("/create-comment", commentController.create_comment);
router.get('/total-comments',commentController.get_total_comments)

module.exports = router;
