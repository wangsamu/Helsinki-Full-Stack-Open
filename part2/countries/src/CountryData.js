import React from 'react';

export const CountryData = ({ country }) => {
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
    </div>
  );
};
