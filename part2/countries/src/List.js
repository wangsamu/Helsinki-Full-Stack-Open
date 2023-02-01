import React from 'react';
import { CountryData } from './CountryData';

export const List = ({ matchingCountries }) => {
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
          <p key={country.name.common}>{country.name.common}</p>
        ))}
    </div>
  );
};
