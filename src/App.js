import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  let pageContent;
  if (currentPage === "home") {
    pageContent = <Home />;
  } else if (currentPage === "profile") {
    pageContent = <Profile />;
  } else if (currentPage === "auth") {
    pageContent = <Auth />;
  }

  return (
    <div className="App">
      {/* Background blur */}
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      {/* Navigation */}
      <div className="nav-div">
        <button className="btn" onClick={() => setCurrentPage("home")}>
          Home
        </button>
        <button className="btn" onClick={() => setCurrentPage("profile")}>
          Profile
        </button>
        <button className="btn" onClick={() => setCurrentPage("auth")}>
          Auth
        </button>
      </div>

      {/* Display the selected page */}
      {pageContent}
    </div>
  );
}

export default App;
