import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.REACT_APP_URL;

async function postNewUser(body) {
  await axios.post(`${BASE_URL}/auth/sign-up`, body);
}

const api = {
  postNewUser,
};

export default api;
