import "@/plugins";

import Vue from "vue";

import { AppAlert, AppLoader, AppSpinner } from "@/components/utils";
import dateFilter from "@/filter/date";

// Global components
Vue.component("AppAlert", AppAlert);
Vue.component("AppLoader", AppLoader);
Vue.component("AppSpinner", AppSpinner);

Vue.filter("date", dateFilter);
