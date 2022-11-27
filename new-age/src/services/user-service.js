import axios from "./axios.js";

export const updateUser = (data, id, token) => {
  return axios.put("/users/" + id, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
