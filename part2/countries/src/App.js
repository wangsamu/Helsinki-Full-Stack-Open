import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [serachValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => console.log(response.data));
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='App'>
      <h1>Country Data:</h1>
      <div>
        Find countries:
        <input type={Text} value={serachValue} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
