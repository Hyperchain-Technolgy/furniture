import axios from "axios"
import { logOut } from '../feature/auth/authSlice'

const ENDPOINT = 'http://localhost:5000';
// const ENDPOINT = 'https://furniture-backend-2u8i.onrender.com';

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      logOut();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
)

export const getAll = async (path, token = '') => {
  const response = await axios.get(`${ENDPOINT}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;
}

export const registerUser = async (path, userData) => {
  const response = await axios.post(`${ENDPOINT}${path}`, userData)
  return response.data;
}

export const loginUser = async (path, credential) => {
  const response = await axios.post(`${ENDPOINT}${path}`, credential)
  return response.data;
}

export const addToWishList = async (path, prodId, token) => {
  const response = await axios
    .put(`${ENDPOINT}${path}`,
      { prodId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
  return response.data;
}

export const getUser = async (path, token) => {
  const response = await axios.get(`${ENDPOINT}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;
}

export const removeFromWishList = async (path, prodId, token) => {
  const response = await axios
    .delete(`${ENDPOINT}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        prodId: prodId
      }
    })
  return response.data;
};