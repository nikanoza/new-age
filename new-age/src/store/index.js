const store = {
  state: {
    token: "",
    user: {},
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    getUserInfo(state) {
      return state.user;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    setToken(context, token) {
      context.commit("setToken", token);
    },
  },
};

export default store;
