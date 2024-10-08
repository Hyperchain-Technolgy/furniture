import axios from "axios";

// const ENDPOINT = 'http://localhost:5000';
const ENDPOINT = "https://furniture-backend-2u8i.onrender.com";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("userData");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export const getAll = async (path, token = "") => {
  const response = await axios.get(`${ENDPOINT}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getSpecific = async (path) => {
  const response = await axios.get(`${ENDPOINT}${path}`);
  return response.data;
};

export const registerUser = async (path, userData) => {
  const response = await axios.post(`${ENDPOINT}${path}`, userData);
  return response.data;
};

export const loginUser = async (path, credential) => {
  const response = await axios.post(`${ENDPOINT}${path}`, credential);
  return response.data;
};

export const addToWishList = async (path, prodId, token) => {
  const response = await axios.put(
    `${ENDPOINT}${path}`,
    { prodId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getUser = async (path, token) => {
  const response = await axios.get(`${ENDPOINT}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const removeFromWishList = async (path, prodId, token) => {
  const response = await axios.delete(`${ENDPOINT}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      prodId: prodId,
    },
  });
  return response.data;
};

export const createProduct = async (productData, token) => {
  const response = await axios.post(
    `${ENDPOINT}/api/product/create`,
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateProductApi = async (id, productData, token) => {
  const response = await axios.put(
    `${ENDPOINT}/api/product/${id}`,
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteProduct = async (productId, token) => {
  try {
    const response = await axios.delete(
      `${ENDPOINT}/api/product/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Product deleted successfully:", response.data);
  } catch (error) {
    console.error("Failed to delete product:", error.response.data);
  }
};
