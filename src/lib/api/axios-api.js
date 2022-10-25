import axios from "axios";

const apiUrl = "https://openmarket.weniv.co.kr";
const instance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

// const accessInstance = axios.create({
//   baseURL: apiUrl,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: ` ${localStorage.getItem("token")}`,
//   },
// });

export const getProductsList = async () => {
  const response = await instance.get(`/products`);
  return response.data;
};

export const getProductsDetail = async (id) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};

export const postUserLogin = async (formData) => {
  const response = await instance.post("/accounts/login/", formData);
  return response.data;
};

export const postUserLogOut = async (formData) => {
  const response = await instance.post("/accounts/logout/");
  return response.data;
};
export const postUserIdCheck = async (userId) => {
  const response = await instance.post(
    "/accounts/signup/valid/username/",
    userId
  );
  return response.data;
};
