import getLocation from "./components/Location";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export const getWeatherData = async () => {
  try {
    const locationData = await getLocation(true);
    //console.log("Location Data:", locationData);

    const { latitude, longitude } = locationData;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    //console.log("API URL:", API_URL);

    const response = await fetch(API_URL);
    const data = await response.json();
    //console.log("Weather Data:", data);

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};
