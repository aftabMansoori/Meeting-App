import Router from "vue-router";

import Login from "@/pages/Login";
import Calender from "@/pages/Calender";
import Meeting from "@/pages/Meeting";
import Teams from "@/pages/Teams";

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "Calender",
      path: "/",
      component: Calender,
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
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
    },
    {
      name: "Teams",
      path: "/teams",
      component: Teams,
    },
  ],
});

export default router;
