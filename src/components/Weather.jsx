import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
// import 'react-open-weather/lib/css/ReactWeather.css';

const Weather = ({ countries, lastSegment }) => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "723a5c8f63a89d444c1dd2f158a6d319",
    lat: countries[lastSegment - 1].lat,
    lon: countries[lastSegment - 1].long,
    lang: countries[lastSegment - 1].language,
    unit: "metric",
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang= {language === "Ru"
      ? "ru"
      : language === "Uz"
      ? "uz"
      : "en"}
      // lang={countries[lastSegment - 1].language}
      locationLabel={countries[lastSegment - 1].capital}
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
  );
};

export default Weather;
