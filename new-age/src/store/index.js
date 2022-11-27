const store = {
  state: {
    token: "",
    user: {
      firstName: "",
      lastName: "",
      email: "",
      birthday: "",
      password: "",
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getUserInfo(state) {
      return state.user;
    },
    getFirstName(state) {
      return state.user.firstName;
    },
    getLastName(state) {
      return state.user.lastName;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUser(state, payload) {
      state.user = { ...payload };
    },
  },
  actions: {
    setToken(context, token) {
      context.commit("setToken", token);
    },
    setUser(context, userData) {
      context.commit("setUser", userData);
    },
  },
};

export default store;
