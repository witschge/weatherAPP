import getLocation from "./components/Location";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export const getWeatherData = async (userAgreed) => {
  try {
    const locationData = await getLocation(userAgreed);
    console.log("Location Data:", locationData);

    const { latitude, longitude, city } = locationData;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    //console.log("API URL:", API_URL);

    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Weather Data:", data);

    /*if (!data || !data.main || !data.weather) {
      throw new Error("Invalid weather data received");
    }*/

    return {
      city: city || "Nepoznato",
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};
