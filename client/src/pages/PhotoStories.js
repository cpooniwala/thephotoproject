import React, { useState, useEffect } from "react";
import API from "../utils/API";

function PhotoStories() {
  // Setting our component's initial state
  const [camera, setCamera] = useState();
  const [photos, setPhotos] = useState([]);

  //
  useEffect(() => {}, []);

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setCamera(value);
    console.log(camera);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get camera update the camera state
    event.preventDefault();
    console.log(camera);
    API.getCamera(camera)
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Hello!</h1>
      <form>
        <input
          value={camera}
          onChange={handleInputChange}
          className=""
          type="text"
          placeholder="Enter Your Camera ID"
          id="cameraID"
        />
        <input
          className="button-primary"
          type="submit"
          value="submit"
          onClick={handleFormSubmit}
        />
      </form>
      <div>
        <p>Photo Container</p>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <p>{photo.caption}</p>
              <p>{photo.location}</p>
              <p>{photo.instagram}</p>
              <img src={photo.url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotoStories;
