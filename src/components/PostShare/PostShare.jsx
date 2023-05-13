import React from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare">
      {/*  Profile Image */}
      <img src={ProfileImage} alt="" />

      {/*  Input */}
      <div>
        <input type="text" placeholder="What's happening?" />
        {/*  Post Options */}
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
