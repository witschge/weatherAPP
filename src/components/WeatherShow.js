import React from "react";

const WeatherShow = ({ weatherData }) => {
  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  const { temperature, description } = weatherData;

  return (
    <div>
      <p>Prikazujemo vremenske podatke:</p>
      <p>Temperature: {temperature} °C</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherShow;
