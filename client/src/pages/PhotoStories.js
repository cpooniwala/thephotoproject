import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Gallery from "react-photo-gallery";

function PhotoStories() {
  // Setting our component's initial state
  const [camera, setCamera] = useState();
  const [photos, setPhotos] = useState([]);
  const [picturesFromS3, setPicturesFromS3] = useState([]);
  //
  useEffect(() => {
    loadPictures();
  }, []);

  //load my Pictures
  function loadPictures() {
    API.getPictures()
      .then((res) => setPicturesFromS3(galleryPictures(res.data)))
      .catch((err) => console.log(err));
  }

  let galleryPictures = function (photosfromS3) {
    console.log(photosfromS3);
    let galleryPicturesforRender = [];
    for (let i = 0; i < photosfromS3.length; i++) {
      galleryPicturesforRender.push({
        src: photosfromS3[i].url,
        width: 4,
        height: 4,
      });
    }
    console.log(galleryPicturesforRender);
    return galleryPicturesforRender;
  };

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setCamera(value);
    console.log(camera);
    console.log(picturesFromS3);
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
      <h1>The Photo Project</h1>
      <div>{<Gallery photos={picturesFromS3} />}</div>
      <form>
        <input
          value={camera}
          onChange={handleInputChange}
          className=""
          type="text"
          placeholder="Enter Your Camera ID"
          id="cameraID"
        />
        <br></br>
        <input
          className="button-primary"
          type="submit"
          value="submit"
          onClick={handleFormSubmit}
        />
      </form>
      <div>
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
