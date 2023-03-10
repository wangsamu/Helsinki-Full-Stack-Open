import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Weather } from './Weather';

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
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
};
