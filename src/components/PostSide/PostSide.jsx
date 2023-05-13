import React from "react";
import "./PostSide.css";
import PostShare from "../PostShare/PostShare";

const PostSide = () => {
  return (
    <div className="PostSide">
      {/*  Create your Post section */}
      <PostShare />
    </div>
  );
};

export default PostSide;
