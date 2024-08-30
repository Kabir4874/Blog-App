import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { usePostBlogMutation } from "../../redux/features/blogs/blogsApi";
import { toast } from "react-hot-toast";
const AddPost = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [postBlog, { isLoading }] = usePostBlogMutation();
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
      },
    });

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const content = await editorRef.current.save();
      const newPost = {
        title,
        coverImg,
        content,
        description: metaDescription,
        author: "66d01fc507b773f95a28d116",
        rating,
      };
      const response = await postBlog(newPost).unwrap();
      console.log(response);
      toast.success("Blog Added Successfully");
    } catch (error) {
      console.log("Failed to submit post");
    }
  };
  return (
    <div className="bg-white md:p-8 p-2">
      <h2 className="text-2xl font-semibold capitalize">
        Create a new blog post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-4">
          <label htmlFor="" className="font-semibold text-xl">
            Blog Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Ex: Marina del rey marriott..."
            className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
          />
        </div>
        {/* blog details  */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* left side  */}
          <div className="md:w-2/3 w-full">
            <p className="font-semibold text-xl mb-5">Content Section</p>
            <p className=" text-xs italic">Write your post below...</p>
            <div id="editorjs"></div>
          </div>
          {/* right side  */}
          <div className="md:w-1/3 w-full border p-5 space-y-5">
            <p className="text-xl font-semibold">Choose blog format</p>
            <div className="space-y-4">
              <label htmlFor="" className="font-semibold text-base">
                Blog Cover:
              </label>
              <input
                type="text"
                value={coverImg}
                onChange={(e) => setCoverImg(e.target.value)}
                required
                placeholder="cover image link"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="" className="font-semibold text-base">
                Category:
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                placeholder="Rooftop/Gardening/something"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="" className="font-semibold text-base">
                Meta Description:
              </label>
              <textarea
                cols={4}
                rows={4}
                type="text"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                required
                placeholder="Add Meta Data to increase SEO performance"
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="" className="font-semibold text-base">
                Rating:
              </label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="" className="font-semibold text-base">
                Author:
              </label>
              <input
                type="text"
                required
                placeholder=""
                className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
              />
            </div>
          </div>
        </div>
        {message && <p className="text-red-500">{message}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
        >
          Add New Blog
        </button>
      </form>
    </div>
  );
};

export default AddPost;
