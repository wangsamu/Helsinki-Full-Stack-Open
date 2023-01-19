import React from 'react';

function ContactList({ persons, searchValue }) {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(
        ({ name, number }) =>
          name.toLowerCase().includes(searchValue.toLowerCase()) && (
            <p key={name}>
              {name} {number}
            </p>
          )
      )}
    </div>
  );
}

export default ContactList;
