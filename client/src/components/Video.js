import React from "react";
import Instructions from "../components/Instructions";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Video() {
  return (
    <div>
      <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video
            src="https://thephotoproject.s3.us-east-2.amazonaws.com/photoproj.mov"
            autoPlay={true}
            loop={true}
          />
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>The Photo Project</h1>
        </div>
      </header>
    </div>
  );
}

export default Video;
