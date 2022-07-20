import config from "@/config";
import { login } from "@/services/auth";

const auth = {
  state: {
    token: localStorage.getItem(config.KEY_TOKEN) || "",
    email: localStorage.getItem(config.KEY_EMAIL) || "",
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setEmail(state, email) {
      state.email = email;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const res = await login(credentials);
        const { email, token, name } = res.data;

        localStorage.setItem(config.KEY_TOKEN, token);
        localStorage.setItem(config.KEY_EMAIL, email);

        commit("setToken", token);
        commit("setEmail", email);

        const status = res.status;

        return { name, status };
      } catch (err) {
        return err.response.data;
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit("setToken", "");
      commit("setEmail", "");

      return "success";
    },
  },
};

export default auth;
