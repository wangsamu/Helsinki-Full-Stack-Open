import axios from 'axios';
import { useEffect, useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [searchValue, setSearchValue] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    console.log('useEffect!');
    axios.get('http://localhost:4000/persons').then((response) => {
      console.log('data fetched using useEffect!');
      setPersons(response.data);
    });
  }, []);

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

  const addPerson = (e) => {
    e.preventDefault();
    console.log(nameInUse(newName));

    if (nameInUse(newName)) {
      alert(`${newName} is already added to phonebook!`);
      return;
    }

    const newId = Math.max(...persons.map((person) => person.id));
    const newPerson = { id: newId, name: newName, number: newNumber };

    axios
      .put(`http://localhost:4000/persons/${newPerson.id}`, newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
      <AddContactForm
        handleSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <ContactList persons={persons} searchValue={searchValue} />
    </div>
  );
};

export default App;
