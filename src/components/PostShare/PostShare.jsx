import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpeg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

const PostShare = () => {
  // State to store uploaded image
  const [image, setImage] = useState(null);

  // Reference to the input element
  const imageRef = useRef(null);

  // Function to handle image change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // Get the image
      let img = event.target.files[0];

      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  // Function to handle option click
  // Control will go to the input element "ImageUpload" div,
  // then to onImageChange function
  const handleOptionClick = () => {
    imageRef.current.click();
  };

  // Function to handle close button in preview image section
  function handleClose() {
    setImage(null);
  }

  return (
    <div className="PostShare">
      {/*  Profile Image */}
      <img src={ProfileImage} alt="" />

      {/*  Input */}
      <div>
        <input type="text" placeholder="What's happening?" />
        {/*  Post Options */}
        <div className="postOptions">
          {/* Photo */}
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={handleOptionClick}
          >
            <UilScenery />
            Photo
          </div>
          {/* Video */}
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          {/* Location */}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          {/* Schedule */}
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>

          {/* Share Button */}
          <button className="btn ps-btn">Share</button>

          {/* Image Upload */}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {/* Preview Image (from Image Upload section)*/}
        {image && (
          <div className="previewImage">
            {/* Close Button */}
            <UilTimes onClick={handleClose} />

            {/* Uploaded Image */}
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
