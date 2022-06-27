import { useState, useEffect } from 'react';

type WeatherDataAPIType = {
  weather: [{
    description: string;
    id: number;
    main: string;
    icon: string;
  }];
}


const useWeatherAPIData = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataAPIType>();
  const [error, setError] = useState<any>();

  const fetchApi = () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const apiResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" +
          position.coords.latitude + "&lon=" +
          position.coords.longitude + "&appid=1e9c61b5cdb93035bdff573cee2d10e0&lang=id");
        const json = await apiResponse.json();
        setWeatherData(json);
      }, (error) => {
        if (error.code) {
          setError("Mohon aktfikan lokasi agar web dapat berjalan");
        }
      });
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { error, weatherData };
}

export default useWeatherAPIData;