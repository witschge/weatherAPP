const getLocation = async (userAgreed) => {
  if (userAgreed) {
    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;

      //console.log("Dobijene koordinate:", latitude, longitude);

      return {
        latitude,
        longitude,
      };
    } catch (error) {
      console.error("Location error:", error);
      throw error;
    }
  } else {
    return {
      latitude: 44.7866,
      longitude: 20.4489,
      city: "Belgrade",
      country: "Serbia",
    };
  }
};
const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

export default getLocation;
