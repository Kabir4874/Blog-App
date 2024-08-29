import React from "react";
import formatDate from "../../utils/formatDate";

const SingleBlogCard = ({ blog }) => {
  const {
    title,
    description,
    content,
    coverImg,
    category,
    rating,
    author,
    createdAt,
  } = blog || {};

  return (
    <div className="bg-white p-8">
      <div>
        <h1 className="md:text-4xl text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">
          {formatDate(createdAt)} by{" "}
          <span className="text-blue-400">{author?.username}</span>
        </p>
      </div>
      <div>
        <img src={coverImg} alt="cover img" className="w-full md:h-[520px] bg-cover"/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default SingleBlogCard;
