import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      {/*  Three sides: ProfileSide, PostSide, RightSide */}
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSide">Right Side</div>
    </div>
  );
};

export default Home;
