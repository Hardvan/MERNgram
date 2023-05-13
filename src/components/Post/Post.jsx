import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = (props) => {
  return (
    <div className="Post">
      {/* Post image */}
      <img src={props.data.img} alt="" />

      {/* Post info */}
      <div className="postReact">
        <img src={props.data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {props.data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{props.data.name}</b>
        </span>
        <span> {props.data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
