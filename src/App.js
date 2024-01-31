import React from "react";
import { useState, useEffect } from "react";
import WeatherShow from "./components/WeatherShow";
import { getWeatherData } from "./api";

function App() {
  const handleYesClicked = async () => {
    //console.log("Yes was clicked!!!");
    const weatherData = await getWeatherData();
    //console.log("Weather data:", weatherData);
  };
  const handleNoClicked = async () => {
    //console.log("No was clicked!!!");
    const weatherData = await getWeatherData();
    //console.log("Weather data:", weatherData);
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
