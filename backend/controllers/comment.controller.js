const Comment = require("../models/comment.model");

class commentController {
  create_comment = async (req, res) => {
    try {
      const comment = new Comment(req.body);
      await comment.save();
      res.status(200).send({ message: "Comment added successfully", comment });
    } catch (error) {
      console.error("Error in create comment: ", error);
      res.status(500).send({ message: "Error in create comment" });
    }
  };
  get_total_comments = async (req, res) => {
    try {
      const totalComment = await Comment.countDocuments({});
      res
        .status(200)
        .send({ message: "Total comments count retrieved", totalComment });
    } catch (error) {
      console.error("Error in getting total comments: ", error);
      res.status(500).send({ message: "Error in getting total comments" });
    }
  };
}
module.exports = new commentController();
