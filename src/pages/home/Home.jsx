import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      {/*  Three sides: ProfileSide, PostSide, RightSide */}
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
