import './App.css';

function App() {
  const [serachValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Country Data:</p>
      </header>
      <div>
        Find countries:
        <input value={serachValue} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
