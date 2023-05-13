import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        {/* Cover Image */}
        <img src={Cover} alt="" />
        {/* Profile Image */}
        <img src={Profile} alt="" />
      </div>
    </div>
  );
};

export default ProfileCard;
