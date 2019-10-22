import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    // need to fix url
    baseURL: 'https://bookr-bw-1.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};