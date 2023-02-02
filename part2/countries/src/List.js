import React from 'react';
import { CountryData } from './CountryData';

export const List = ({ matchingCountries, showCountry }) => {
  if (matchingCountries && matchingCountries.length > 10) {
    return <p>Too many results, please specify your search! 🤗</p>;
  }

  if (matchingCountries && matchingCountries.length === 1) {
    return <CountryData country={matchingCountries[0]} />;
  }

  return (
    <div>
      {matchingCountries &&
        matchingCountries.map((country) => (
          <div>
            <p key={country.name.common}>{country.name.common}</p>
            <button onClick={() => showCountry([country])}>show</button>
          </div>
        ))}
    </div>
  );
};
