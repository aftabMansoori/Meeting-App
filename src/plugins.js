import Vue from "vue";
import Vuex from "vuex";
import Router from "vue-router";

import Vuelidate from "vuelidate";
import VueToast from "vue-toast-notification";
import { BootstrapVue } from "bootstrap-vue";

import "vue-toast-notification/dist/theme-default.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuex);
Vue.use(Router);

Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.use(BootstrapVue);
