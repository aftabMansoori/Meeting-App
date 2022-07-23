import Vuex from "vuex";
import auth from "./modules/auth";
import manageUsers from "./modules/manageUsers";

const store = new Vuex.Store({
  modules: {
    auth: auth,
    manageUsers: manageUsers,
  },
});

store.dispatch("allUsers");

export default store;
