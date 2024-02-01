import React from "react";
import { useState } from "react";
import WeatherShow from "./components/WeatherShow";
import { getWeatherData } from "./api";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleYesClicked = async () => {
    try {
      //console.log("Yes was clicked!!!");
      const weatherData = await getWeatherData(true);
      setWeatherData(weatherData);
      //console.log("Weather data:", weatherData);
    } catch (error) {
      console.error("Weather data error:", error);
    }
  };

  const handleNoClicked = async () => {
    //console.log("No was clicked!!!");
    try {
      const weatherData = await getWeatherData(false);
      setWeatherData(weatherData);
      //console.log("Weather data:", weatherData);
    } catch (error) {
      console.error("Weather data error:", error);
    }
  };

  return (
    <div>
      <h1>Da li dozvoljavate da aplikacija pristupa Vasoj lokaciji?</h1>
      <button onClick={handleYesClicked}>Da</button>
      <button onClick={handleNoClicked}>Ne</button>

      <WeatherShow weatherData={weatherData} />
    </div>
  );
}
export default App;
