import React from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className="Posts">
      {/* Display all posts */}
      {PostsData.map((post, id) => {
        // Pass the post data to the Post component
        return <Post key={id} id={id} data={post} />;
      })}
    </div>
  );
};

export default Posts;
