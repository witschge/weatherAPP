import React from "react";
import { useState, useEffect } from "react";
import WeatherShow from "./components/WeatherShow";

function App() {
  const handleYesClicked = () => {
    console.log("Yes was clicked!!!");
  };
  const handleNoClicked = () => {
    console.log("No was clicked!!!");
  };

  return (
    <div>
      <h1>Da li dozvoljavate da aplikacija pristupa Vasoj lokaciji?</h1>
      <button onClick={handleYesClicked}>Yes</button>
      <button onClick={handleNoClicked}>No</button>
    </div>
  );
}
export default App;
