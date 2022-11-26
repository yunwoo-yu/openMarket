import axios from "axios";

const apiUrl = "https://openmarket.weniv.co.kr";
const instance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

const accessInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

accessInstance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `JWT ${localStorage.getItem("token")}`,
  };
  return config;
});

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
  const response = await instance.post("/accounts/signup/", formData);
  return response.data;
};

export const postSignUpSeller = async (formData) => {
  const response = await instance.post("/accounts/signup_seller/", formData);
  return response.data;
};

export const getUserCart = async () => {
  const cartItemDetails = [];
  const response = await (await accessInstance.get("/cart/")).data.results;
  const filterItem = await Promise.all(
    response.map((item) => getProductsDetail(item.product_id))
  );

  cartItemDetails.push(...response);

  const resultArray = cartItemDetails.map((item, idx) => {
    return { ...item, ...filterItem[idx] };
  });

  return resultArray;
};

export const setUserCart = async (itemData) => {
  const response = await accessInstance.put(`/cart/${itemData.cart_item_id}/`, {
    product_id: itemData.product_id,
    quantity: itemData.quantity,
    is_active: itemData.is_active,
  });
  return response.data;
};

export const postCartItem = async (productData) => {
  const response = await accessInstance.post("/cart/", productData);
  return response.data;
};

export const deleteCartItem = async (itemId) => {
  const response = await accessInstance.delete(`/cart/${itemId}`);
  return response.data;
};

export const postProductOrder = async (orderData) => {
  const response = await accessInstance.post("/order/", orderData);
  return response.data;
};
