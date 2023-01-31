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
  return request.then((returnedNewPerson) => returnedNewPerson.data);
};

export default { getAll, create };
