import React, { useState, useEffect } from "react";
import "./App.css";
import "./pages/PhotoStories";
import PhotoStories from "./pages/PhotoStories";
import Video from "./components/Video";

function App() {
  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    console.log(body);
  };

  useEffect(() => {
    callBackendAPI();
  }, []);

  return (
    <div className="App">
      <Video />
      <PhotoStories />
    </div>
  );
}

export default App;
