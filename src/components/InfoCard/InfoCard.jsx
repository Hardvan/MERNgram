import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  // Function to handle pen click
  function handlePenClick() {
    setModalOpened(true);
  }

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={handlePenClick} />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Human</span>
      </div>

      <div className="info">
        <span>
          <b>Lives on </b>
        </span>
        <span>Mars</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Alien Co. Pvt. Ltd.</span>
      </div>

      <button className="btn logout-btn">Logout</button>
    </div>
  );
};

export default InfoCard;
