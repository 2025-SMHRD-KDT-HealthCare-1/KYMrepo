import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Ex13 = () => {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("Gwangju");

  const handleCity = (name) => {
    setCity(name);
  };

  useEffect(() => {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const key = "a325fba05fb91b29e7a620eef809c7eb";

    axios
      .get(url, {
        params: {
          q: city,
          appid: key,
        },
      })
      .then((res) => {
        const data = res.data;
        setTemp((data.main.temp - 273.15).toFixed(1)); 
        setWeather(data.weather[0].main);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [city]); 

  return (
    <div className="weather-container">
      <div className="weather-item">
        <h1>날씨</h1>
        <div className="weather-data">
          <h3>{city}</h3>
          <h1>{temp ? `${temp}℃` : "Loading..."}</h1>
          <h4>{weather}</h4>
        </div>
        <div className="button-wrapper">
          <button onClick={() => handleCity("Osaka")}>Osaka</button>
          <button onClick={() => handleCity("Paris")}>Paris</button>
          <button onClick={() => handleCity("London")}>London</button>
        </div>
      </div>
    </div>
  );
};

export default Ex13;
