import Axios from "axios";

// API 3 AXIOS
export const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
