import React from 'react';

function ContactList({ persons, searchValue, handleDelete }) {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(
        ({ name, number, id }) =>
          name.toLowerCase().includes(searchValue.toLowerCase()) && (
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
