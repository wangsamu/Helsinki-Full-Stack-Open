import axios from 'axios';

const getAll = () => {
  const request = axios.get('http://localhost:4000/persons');
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(
    `http://localhost:4000/persons/${newPerson.id}`,
    newPerson
  );
  return request.then((response) => response.data);
};

const deletePerson = (personToDelete) => {
  const request = axios.delete(
    `http://localhost:4000/persons/${personToDelete.id}`,
    personToDelete
  );
  return request.then((returnedDeletedPerson) => returnedDeletedPerson.data);
};

export default { getAll, create, deletePerson };
