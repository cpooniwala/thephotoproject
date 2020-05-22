import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Instructions() {
  return (
    <div className="value-props-row">
      <div className="four columns value-prop">
        <img
          className="value-img"
          src="https://thephotoproject.s3.us-east-2.amazonaws.com/photograph.svg"
        ></img>
        <p className="value-prop">Use a Disposable Camera</p>
      </div>
      <div className="four columns value-prop">
        <img
          className="value-img"
          src="https://thephotoproject.s3.us-east-2.amazonaws.com/share.svg"
        ></img>
        <p>Take 3 Photos and Pass the Camera to a Stranger</p>
      </div>
      <div className="four columns value-prop">
        <img
          className="value-img"
          src="https://thephotoproject.s3.us-east-2.amazonaws.com/tour.svg"
        ></img>
        <p>
          Mail the Camera Back to Us and We'll Develop the Pictures and Map the
          Journey of the Camera
        </p>
      </div>
    </div>
  );
}

export default Instructions;
