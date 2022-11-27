import axios from "./axios.js";

export const updateUser = (data, id, token) => {
  return axios.put("/users/" + id, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const deleteAccount = (id, token) => {
  return axios.delete("/users/" + id, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
