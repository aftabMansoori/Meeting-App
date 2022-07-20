import Router from "vue-router";
import store from "@/store";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Calender from "@/pages/Calender";
import Meeting from "@/pages/Meeting";
import Teams from "@/pages/Teams";
import PageNotFound from "@/pages/404";

const meta = {
  authorize: "general",
};

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "Login",
      path: "/login",
      component: Login,
    },
    {
      name: "Register",
      path: "/register",
      component: Register,
    },
    {
      name: "Calender",
      path: "/",
      component: Calender,
      meta,
    },
    {
      name: "Meetings",
      path: "/meetings",
      component: Meeting,
      //   children: [
      //     {
      //       name: "Meetings",
      //       path: "/meetings/search-meetings",

      //     },
      //   ],
      meta,
    },
    {
      name: "Teams",
      path: "/teams",
      component: Teams,
      meta,
    },
    {
      name: "PageNotFound",
      path: "*",
      component: PageNotFound,
      meta,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authorize = to.meta.authorize;

  if (authorize && !store.getters.isAuthenticated) next({ name: "Login" });
  else next();
});

export default router;
