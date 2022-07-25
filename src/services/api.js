import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.REACT_APP_URL;

function createConfig(token) {
  return { headers: { 'Authorization': `Bearer ${token}` } };
}

async function postNewUser(body) {
  await axios.post(`${BASE_URL}/auth/sign-up`, body);
}

async function signIn(body) {
  return await axios.post(`${BASE_URL}/auth/login`, body);
}

async function getSubscriptions(token) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/subscriptions/memberships`, config);
}

async function getSubscriptionDataById(token, idSubscription) {
  const config = createConfig(token);
  return await axios.get(`${BASE_URL}/subscriptions/memberships/${idSubscription}`, config);
}

async function postSubscription(token, body) {
  const config = createConfig(token);
  return await axios.post(`${BASE_URL}/subscriptions`, body, config);
}

async function deleteSubscription(token) {
  const config = createConfig(token);
  return await axios.delete(`${BASE_URL}/subscriptions`, config);
}

const api = {
  deleteSubscription,
  getSubscriptions,
  getSubscriptionDataById,
  postNewUser,
  postSubscription,
  signIn,
};

export default api;
