import "@/plugins";

import Vue from "vue";

import { AppAlert, AppLoader } from "@/components/utils";
import dateFilter from "@/filter/date";

// Global components
Vue.component("AppAlert", AppAlert);
Vue.component("AppLoader", AppLoader);

Vue.filter("date", dateFilter);
