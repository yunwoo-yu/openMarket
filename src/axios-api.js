import axios from "axios";

const apiUrl = "https://openmarket.weniv.co.kr";

export const getProductsList = axios.create({
  baseURL: apiUrl,
  // headers: "Content-Type: application/json",
});
