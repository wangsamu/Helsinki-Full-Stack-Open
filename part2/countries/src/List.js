import React from 'react';

export const List = ({ matchingCountries }) => {
  if (matchingCountries && matchingCountries.length > 10) {
    return <p>Too many results, please specify your search! 🤗</p>;
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
