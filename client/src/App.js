import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./pages/PhotoStories";
import PhotoStories from "./pages/PhotoStories";

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
      <PhotoStories />
    </div>
  );
}

export default App;
