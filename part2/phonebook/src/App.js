import axios from 'axios';
import { useEffect, useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import personsServices from './services/persons';

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
    personsServices.getAll().then((returnedPersons) => {
      console.log(returnedPersons);
      setPersons(returnedPersons);
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

  const isNameInUse = (name) => {
    return persons.find((person) => person.name === name);
  };

  const addPerson = (e) => {
    e.preventDefault();

    if (isNameInUse(newName)) {
      alert(`${newName} is already added to phonebook!`);
      return;
    }

    // const newId = Math.max(...persons.map((person) => person.id));
    const newPerson = { name: newName, number: newNumber };

    console.log(newPerson);

    personsServices
      .create(newPerson)
      .then((returnedNewPerson) => {
        setPersons(persons.concat(returnedNewPerson));
        setNewName('');
        setNewNumber('');
      })
      .catch((error) => alert(error));
  };

  const deletePerson = (idOfPersonToDelete, nameOfPersonToDelete) => {
    window.confirm(
      `Delete permanently person ${idOfPersonToDelete}: ${nameOfPersonToDelete}?`
    );

    personsServices.deletePerson(idOfPersonToDelete).then(() => {
      console.log('Person deleted');
      setPersons(persons.filter((person) => person.id !== idOfPersonToDelete));
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
      <ContactList
        persons={persons}
        searchValue={searchValue}
        handleDelete={deletePerson}
      />
    </div>
  );
};

export default App;
