import React from 'react';

export const Weather = ({ weatherData }) => {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <p>{weatherData.weather[0].description}</p>
      <p>temperature: {(weatherData.main.temp - 273.15).toFixed(2)} Celcius</p>
      <p>wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};
