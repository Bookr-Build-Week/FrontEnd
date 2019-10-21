import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    // need to fix url
    baseURL: 'http://localhost:5000/',
    headers: {
      Authorization: token
    }
  });
};