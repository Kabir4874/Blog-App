const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    content: { type: String, required: true },
    coverImg: String,
    category: String,
    author: {
      type: String,
    //   ref: "User",
      required: true,
    },
    rating: Number,
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
module.exports = Blog;
