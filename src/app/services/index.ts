import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "http://localhost:8080",
});

export default baseUrl;
