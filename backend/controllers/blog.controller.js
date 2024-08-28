const Blog = require("../models/blog.model");

class blogController {
  create_post = async (req, res) => {
    try {
      const newPost = new Blog({ ...req.body });
      await newPost.save();
      res
        .status(201)
        .send({ message: "Post Created Successfully", post: newPost });
    } catch (error) {
      console.error("Error in creating post: ", error);
      res.status(500).send({ message: "Error in creating post" });
    }
  };
  get_blogs = async (req, res) => {
    try {
      const posts = await Blog.find();
      res.status(200).send({
        message: "All posts retrieved successfully",
        posts,
      });
    } catch (error) {
      console.error("Error in getting post: ", error);
      res.status(500).send({ message: "Error in getting post" });
    }
  };
}
module.exports = new blogController();
