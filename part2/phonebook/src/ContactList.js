import React from 'react';

function ContactList({ persons, searchValue, handleDelete }) {
  const matchesToSearchValue = (personName) =>
    personName.toLowerCase().includes(searchValue.toLowerCase());

  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(
        ({ name, number, id }) =>
          matchesToSearchValue(name) && (
            <div key={id}>
              <p>
                {name} {number}
              </p>
              <button onClick={() => handleDelete(id)}>X</button>
            </div>
          )
      )}
    </div>
  );
}

export default ContactList;
