import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  return (
    <div>
      <h3 className="text-lg font-medium mb-8">Leave a comment</h3>
      <form action="">
        <textarea
          name="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          cols={30}
          rows={10}
          placeholder="Share your opinion about this post..."
          className="w-full bg-bgPrimary focus:outline-none p-5"
        />
        <button
          type="submit"
          className="w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md mt-2 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostComment;
