import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const CountryData = ({ country }) => {
  const [weatherData, setWeatherData] = useState();

  const capitalLatitude = country.capitalInfo.latlng[0];
  const capitalLongitude = country.capitalInfo.latlng[1];

  console.log(capitalLatitude, capitalLongitude);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${capitalLatitude}&lon=${capitalLongitude}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      });
  }, [country]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital.map((city) => city)}</p>

      <p>Area: {country.area} squared kms</p>
      <p>Population: {country.population}</p>
      <h3>Languages:</h3>
      {Object.values(country.languages).map((language) => (
        <p key={language}>{language}</p>
      ))}
      <img src={country.flags.png} />
      <h3>Weather in {country.capital[0]} now:</h3>
      {weatherData && (
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          <p>{weatherData.weather[0].description}</p>
          <p>
            temperature: {(weatherData.main.temp - 273.15).toFixed(2)} Celcius
          </p>
          <p>wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
