// eslint-disable-next-line import/prefer-default-export
import axios from 'axios';

const fetchUsers = () => {
  const url = 'https://venbest-test.herokuapp.com';
  return axios.get(url).then(response => response.data);
};

export { fetchUsers };
