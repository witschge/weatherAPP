import React from "react";

const WeatherShow = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Nema dostupnih vremenskih podataka.</div>;
  }

  const { temperature, description, humidity, city, icon } = weatherData;

  return (
    <div>
      <h2>Lokacija: {city}</h2>
      <p>Temperatura: {temperature} °C</p>
      <p>Opis: {description}</p>
      <p>Vlaznost: {humidity} %</p>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="Weather icon"
      />
    </div>
  );
};

export default WeatherShow;
