import React from "react";
import Cover from "../../img/cover2.jpg";
import Profile from "../../img/profileImg.jpeg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        {/* Cover Image */}
        <img src={Cover} alt="" />
        {/* Profile Image */}
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Hardvan</span>
        <span>Seniormost Senior of Senority</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          {/* Vertical Line */}
          <div className="vl"></div>

          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
