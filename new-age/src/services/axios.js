import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
