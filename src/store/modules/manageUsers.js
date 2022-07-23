import { registeredUsers } from "@/services/manageUsers";

const manageUsers = {
  state: {
    registeredUsers: [],
  },
  mutations: {
    setRegisteredUsers(state, data) {
      state.registeredUsers = data;
    },
  },
  actions: {
    async allUsers({ commit }) {
      const data = await registeredUsers();
      commit("setRegisteredUsers", data);
    },
  },
};

export default manageUsers;
