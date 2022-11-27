import axios from "./axios.js";

export const registration = (data) => {
  return axios.post("/auth/sign-up", data);
};

export const login = (data) => {
  return axios.post("/auth/sign-in", data);
};
