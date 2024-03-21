import axios from "axios"
import { useSelector } from "react-redux";

const ENDPOINT = 'http://localhost:5000';

export const getAll = async (path) => {
  const response = await axios.get(`${ENDPOINT}${path}`)
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

export const addToWishList = async (path, product, token) => {
  const response = await axios.put(`${ENDPOINT}${path}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data
}