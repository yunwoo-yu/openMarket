import axios from "axios";

const apiUrl = "https://openmarket.weniv.co.kr";

const getProducts = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

export const getProductsList = async () => {
  const response = await getProducts.get("/products");
  return response.data;
};

export const getProductsDetail = async (id) => {
  const response = await getProducts.get(`/products/${id}`);
  return response.data;
};
