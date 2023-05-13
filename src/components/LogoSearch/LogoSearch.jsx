import React from "react";
import "./LogoSearch.css";

// Images
import Logo from "../../img/logo.png";

// Icons
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      {/* Logo Image */}
      <img src={Logo} alt="" />

      {/* Search Input */}
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
