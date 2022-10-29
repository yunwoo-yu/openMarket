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

export const postCompanyRegistrationNumberCheck = async (userId) => {
  const response = await instance.post(
    "/accounts/signup/valid/company_registration_number/",
    userId
  );
  return response.data;
};

export const postSignUpBuyer = async (formData) => {
  const response = await instance.post("/accounts/signup", formData);
  return response.data;
};

export const postSignUpSeller = async (formData) => {
  const response = await instance.post("/accounts/signup_seller/", formData);
  return response.data;
};
