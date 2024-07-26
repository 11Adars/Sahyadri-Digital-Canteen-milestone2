import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});


export const registerUser = (username, password) => {
  return api.post('/auth/register', { username, password });
};


export const loginUser = (username, password) => {
  return api.post('/auth/login', { username, password });
};
