import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [searchValue, setSearchValue] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const nameInUse = (name) => {
    return persons.find((person) => person.name === name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInUse(newName));

    if (nameInUse(newName)) {
      alert(`${newName} is already added to phonebook!`);
      return;
    }
    const newPersons = persons.concat({ name: newName, number: newNumber });
    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>
        search by name:
        <input value={searchValue} onChange={handleSearch} />
      </h3>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(
        ({ name, number }) =>
          name.toLowerCase().includes(searchValue.toLowerCase()) && (
            <p key={name}>
              {name} {number}
            </p>
          )
      )}
      <h2>
        debug: {newName} {newNumber}
      </h2>
    </div>
  );
};

export default App;
