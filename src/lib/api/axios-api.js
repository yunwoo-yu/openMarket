import axios from "axios";

const apiUrl = "https://openmarket.weniv.co.kr";

const instance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

export const getProductsList = async () => {
  const response = await instance.get(`/products`);
  return response.data;
};

export const getProductsDetail = async (id) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};

export const postUserLogin = async (formdata) => {
  const response = await instance.post("/accounts/login/", formdata);
  return response.data;
};
