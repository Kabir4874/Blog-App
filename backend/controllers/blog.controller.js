const Blog = require("../models/blog.model");
const Comment = require("../models/comment.model");

class blogController {
  create_post = async (req, res) => {
    try {
      const newPost = new Blog({ ...req.body, author: req.userId });
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
      const { search, category, location } = req.query;
      let query = {};
      if (search) {
        query = {
          ...query,
          $or: [
            { title: { $regex: search, $options: "i" } },
            { content: { $regex: search, $options: "i" } },
          ],
        };
      }
      if (category) {
        query = { ...query, category };
      }
      if (location) {
        query = { ...query, location };
      }
      const posts = await Blog.find(query)
        .populate("author", "email")
        .sort({ createdAt: -1 });
      res.status(200).send({
        message: "All posts retrieved successfully",
        posts,
      });
    } catch (error) {
      console.error("Error in getting posts: ", error);
      res.status(500).send({ message: "Error in getting posts" });
    }
  };
  get_blog_by_id = async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Blog.findById(postId);
      if (!post) {
        res.status(404).send({ message: "Post not found" });
      }
      const comments = await Comment.find({ postId }).populate(
        "user",
        "username email"
      );
      res.status(200).send({
        message: "Post retrieved successfully",
        post,
      });
    } catch (error) {
      console.error("Error in getting post: ", error);
      res.status(500).send({ message: "Error in getting post" });
    }
  };
  update_blog = async (req, res) => {
    try {
      const postId = req.params.id;
      const updatedPost = await Blog.findByIdAndUpdate(
        postId,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!updatedPost) {
        res.status(404).send({ message: "Post not found" });
      }
      res.status(200).send({
        message: "Post updated successfully",
        updatedPost,
      });
    } catch (error) {
      console.error("Error in updating post: ", error);
      res.status(500).send({ message: "Error in updating post" });
    }
  };
  delete_blog = async (req, res) => {
    try {
      const postId = req.params.id;
      await Blog.findByIdAndDelete(postId);
      await Comment.deleteMany({ postId });
      res.status(200).send({
        message: "Post deleted successfully",
      });
    } catch (error) {
      console.error("Error in deleting post: ", error);
      res.status(500).send({ message: "Error in deleting post" });
    }
  };
  get_related_blogs = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(404).send({ message: "Post id not found" });
      }
      const blog = await Blog.findById(id);
      if (!blog) {
        res.status(404).send({ message: "Post not found" });
      }
      const titleRegex = new RegExp(blog.title.split(" ").join("|"), "i");
      const relatedQuery = {
        _id: { $ne: id },
        title: { $regex: titleRegex },
      };
      const relatedPosts = await Blog.find(relatedQuery);
      if (!relatedPosts) {
        res.status(404).send({ message: "Related posts not found" });
      }
      res.status(200).send({
        message: "Related posts retrieved successfully",
        relatedPosts,
      });
    } catch (error) {
      console.error("Error in fetching related posts: ", error);
      res.status(500).send({ message: "Error in fetching related posts" });
    }
  };
}
module.exports = new blogController();
