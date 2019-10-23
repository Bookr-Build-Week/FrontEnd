import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    // need to fix url
    baseURL: 'https://sheltered-springs-53032.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};

// import axios from 'axios';
// ​
// export const bookrApi = axios.create({
//   baseURL: 'https://sheltered-springs-53032.herokuapp.com/',
// });
// ​
// export const bookrApiWithAuth = () => {
//   const token = localStorage.getItem('token');
//   return axios.create({
//     baseURL: 'https://sheltered-springs-53032.herokuapp.com/',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: token,
//     },
//   });
// };