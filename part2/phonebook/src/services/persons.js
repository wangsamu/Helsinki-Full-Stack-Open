import axios from 'axios';

const getAll = () => {
  const request = axios.get('http://localhost:4000/persons');
  return request.then((response) => response.data);
};

const create = (newPersonObject) => {
  const request = axios.post(`http://localhost:4000/persons/`, newPersonObject);
  return request.then((response) => {
    console.log('New person created!', response.data);
    return response.data;
  });
};

const deletePerson = (idOfPersonToDelete) => {
  const request = axios.delete(
    `http://localhost:4000/persons/${idOfPersonToDelete}`
  );
  return request.then((returnedDeletedPerson) => returnedDeletedPerson.data);
};

export default { getAll, create, deletePerson };
