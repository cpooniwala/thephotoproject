import React, { useState, useEffect } from "react";

function PhotoStories() {
  // Setting our component's initial state
  //const [books, setBooks] = useState([]);
  //const [formObject, setFormObject] = useState({});

  //
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Hello!</h1>
      <form>
        <input
          className=""
          type="password"
          placeholder="Enter Your Camera ID"
          id="cameraID"
        />
        <input className="button-primary" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default PhotoStories;
