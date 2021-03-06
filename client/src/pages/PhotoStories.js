import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Gallery from "react-photo-gallery";
import Instructions from "../components/Instructions";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import EditableLabel from "react-inline-editing";
import PhotoItem from "../components/PhotoItem";
import Video from "../components/Video";

function PhotoStories() {
  // Setting our component's initial state
  const [camera, setCamera] = useState();
  const [photos, setPhotos] = useState([]);

  const [picturesFromS3, setPicturesFromS3] = useState([]);

  //UseEffect
  useEffect(() => {
    loadPictures();
  }, []);

  //load my Pictures
  function loadPictures() {
    API.getPictures()
      .then((res) => setPicturesFromS3(galleryPictures(res.data)))
      .catch((err) => console.log(err));
  }

  //Reformat pictures from db to gallery
  let galleryPictures = function (photosfromS3) {
    // console.log(photosfromS3);
    let galleryPicturesforRender = [];
    for (let i = 0; i < photosfromS3.length; i++) {
      galleryPicturesforRender.push({
        src: photosfromS3[i].url,
        width: 4,
        height: 4,
      });
    }
    // console.log(galleryPicturesforRender);
    return galleryPicturesforRender;
  };

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setCamera(value);
    // console.log(camera);
    // console.log(picturesFromS3);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get camera update the camera state
    event.preventDefault();
    console.log(camera);
    API.getCamera(camera)
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log(err));
  };
  const onHandleCaptionChange = (text, id, type) => {
    console.log(text, id, type);
    let pictureData = {
      caption: text,
      id: id,
    };
    //Pass this data to the server
    API.updatePictureData(pictureData).then(function () {
      API.getCamera(camera)
        .then((res) => setPhotos(res.data))
        .catch((err) => console.log(err));
    });
    //Loop through photos on the server

    //Send back new data

    //Set Photos State with new Server
  };

  const onHandleLocationChange = (text, id, type) => {
    console.log(text, id, type);
    let pictureData = {
      location: text,
      id: id,
    };
  };

  const onHandleInstagramChange = (text, id, type) => {
    console.log(text, id, type);
    let pictureData = {
      instagtam: text,
      id: id,
    };
  };

  const onHandleLabelChange = (text, id, type) => {
    console.log(text, id, type);
    let pictureData;
    if (type === "caption") {
      pictureData = {
        caption: text,
        id: id,
      };
    } else if (type === "location") {
      pictureData = {
        location: text,
        id: id,
      };
    } else {
      pictureData = {
        instagram: text,
        id: id,
      };
    }

    API.updatePictureData(pictureData).then(function () {
      API.getCamera(camera)
        .then((res) => setPhotos(res.data))
        .catch((err) => console.log(err));
    });
  };

  return (
    <div>
      <div className="container">
        <Instructions />
        <h4 className="submit-header">So You Received a Camera? </h4>
        <p className="value-prop">
          Enter the ID of the camera to view the Photo Story. Only those that
          know the Camera ID will be able to view the Journey!
        </p>
        <form className="submit-form">
          <input
            value={camera}
            onChange={handleInputChange}
            className=""
            type="text"
            placeholder="Enter Your Camera ID"
            id="cameraID"
          />
          <span className="spacer"></span>
          <input
            className="button-primary"
            type="submit"
            value="submit"
            onClick={handleFormSubmit}
          />
        </form>
      </div>
      <br></br>
      <div className="container">
        {photos.map((photo) => (
          <div key={photo.id}>
            <PhotoItem
              id={photo.id}
              caption={photo.caption}
              location={photo.location}
              instagram={photo.instagram}
              url={photo.url}
              onLabelChange={onHandleLabelChange}
            />
          </div>
        ))}
      </div>
      <div className="container">
        <div>{<Gallery photos={picturesFromS3} />}</div>
      </div>
    </div>
  );
}
export default PhotoStories;
