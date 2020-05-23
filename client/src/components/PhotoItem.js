import React, { useState, useEffect } from "react";
import Instructions from "../components/Instructions";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import EditableLabel from "react-inline-editing";

function PhotoItem({ id, caption, location, instagram, url, onInputChange }) {
  // Setting our component's initial state

  //UseEffect
  useEffect(() => {}, []);

  function handleFocus(text) {
    console.log("Focused with text: " + text);
  }

  function handleFocusOut(text, id) {
    console.log("Left editor with text: " + text);
    console.log("The Photo ID is: " + id);
  }

  return (
    <div className="row">
      <div className="one column">
        <div className="arrow">
          <div className="curve"></div>
          <div className="point"></div>
        </div>
      </div>
      <div className="eleven columns">
        <div className="photo-container">
          <img className="photo-story-image" src={url} />
        </div>

        <div className="photo-caption-container">
          <EditableLabel
            text={caption}
            onFocus={handleFocus}
            onFocusOut={(text) => onInputChange(text, id, "caption")}
          />
        </div>
        <div className="photo-location-container">
          <FaMapMarkedAlt className="icon" />
          <EditableLabel
            text={location}
            onFocus={handleFocus}
            onFocusOut={(text) => onInputChange(text, id, "location")}
          />
        </div>
        <div className="instagram-container">
          <a href={`https://www.instagram.com/${instagram}/`}>
            <FaInstagram />
          </a>
          <EditableLabel
            text={instagram}
            id={id}
            onFocus={handleFocus}
            onFocusOut={(text) => onInputChange(text, id, "instagram")}
          />
        </div>
      </div>
    </div>
  );
}

export default PhotoItem;
