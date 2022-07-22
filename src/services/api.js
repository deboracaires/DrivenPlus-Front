import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.REACT_APP_URL;

async function postNewUser(body) {
  await axios.post(`${BASE_URL}/auth/sign-up`, body);
}

async function signIn(body) {
  return await axios.post(`${BASE_URL}/auth/login`, body);
}

const api = {
  postNewUser,
  signIn,
};

export default api;
