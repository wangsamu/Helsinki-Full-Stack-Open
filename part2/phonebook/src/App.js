import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handlechange = (e) => {
    setNewName(e.target.value);
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
    const newPersons = persons.concat({ name: newName });
    setPersons(newPersons);
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handlechange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
      <h2>debug: {newName}</h2>
    </div>
  );
};

export default App;
