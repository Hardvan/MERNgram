import React from "react";
import "./FollowersCard.css";

// Followers Data
import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {/* Display each follower */}
      {Followers.map((follower, index) => {
        return (
          // Follower Card
          <div className="follower">
            <div>
              {/* Follower Image */}
              <img src={follower.img} alt="" className="followerImage" />
              {/* Follower Name & Username */}
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            {/* Follow Button */}
            <button className="btn fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
