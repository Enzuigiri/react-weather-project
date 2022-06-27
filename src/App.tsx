import { useState, useEffect } from 'react';
// Variable
import { weatherInfo } from './WeatherInfo';
import useWeatherAPIData from './WeatherAPI';
// Component
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Information } from './components/Information';
// Type
export type InformationType = {
  title?: string;
  icon?: string;
  information?: string;
  quote?: string;
  from?: string;
  background?: number;
}



const App = () => {
  const [information, setInformation] = useState<InformationType>();
  const { error, weatherData } = useWeatherAPIData();

  useEffect(() => {
    checkWeather();
  }, [weatherData]);



  const checkWeather = () => {
    const weatherId = weatherData?.weather[0].id ?? NaN;
    const weatherDesc = weatherData?.weather[0].description.toUpperCase();
    const weatherIcon = weatherData?.weather[0].icon;
    let randomQuotes = Math.floor(Math.random() * weatherInfo.length);
    for (let i = 0; i < weatherInfo.length; i++) {
      if (weatherId <= weatherInfo[i].id) {
        return setInformation({
          title: weatherDesc,
          icon: weatherIcon,
          information: weatherInfo[i].information,
          quote: weatherInfo[randomQuotes].quote,
          from: weatherInfo[randomQuotes].from,
          background: weatherInfo[i].background
        });
      }
    }
  }

  return (
    <>
      {error ? (
      <h1>Error : {error}</h1>
      ) : (
      <>
        <Navbar data={weatherData?.weather[0].description} transparent />
        <Information title={information?.title}
          information={information?.information}
          background={information?.background}
          quote={information?.quote}
          from={information?.from}
          icon={information?.icon}
        />
        <Footer />
      </>
      )}
    </>
  );
}

export default App;
