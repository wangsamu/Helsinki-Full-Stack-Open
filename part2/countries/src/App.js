import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from './List';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [matchingCountries, setMatchingCountries] = useState(countries);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setMatchingCountries(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue]);

  return (
    <div className='App'>
      <h1>Country Data:</h1>
      <div>
        Find countries:
        <input type='text' value={searchValue} onChange={handleChange} />
      </div>
      <List matchingCountries={matchingCountries} />
    </div>
  );
}

export default App;
