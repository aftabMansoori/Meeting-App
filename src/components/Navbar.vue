<template>
  <div>
    <b-navbar class="py-0" toggleable="sm" type="light" variant="light">
      <span class="w-100 container">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <!-- <b-navbar-brand>Meetings App</b-navbar-brand> -->

        <b-collapse
          id="nav-text-collapse"
          class="text-center"
          is-nav
          v-if="isAuthenticated"
        >
          <b-navbar-nav>
            <b-nav-item
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.link"
              class="text-decoration-none text-reset py-1 px-1"
              :class="item.id === activeIdx ? 'active text-dark fw-bold' : ''"
              @click="setActive(index)"
            >
              {{ item.label }}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item
              >Hello!
              <span class="text-custom-blue">{{ email }}</span></b-nav-item
            >
            <b-nav-item @click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </span>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import config from "@/config";

export default {
  name: "AppNavbar",
  data() {
    return {
      navItems: [
        { label: "Calender", link: "/", id: 0 },
        { label: "Meetings", link: "/meetings", id: 1 },
        { label: "Teams", link: "/teams", id: 2 },
      ],
      activeIdx: 0,
    };
  },
  methods: {
    setActive(id) {
      this.activeIdx = id;
    },
    async logout() {
      const res = await this.$store.dispatch("logout");
      if (res === "success") {
        Vue.$toast.success("Logout successfull", {
          duration: config.toastDuration,
        });
        this.$router.push("/login");
      }
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    email() {
      return this.$store.state.auth.email;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #d2d2d2;
}
</style>
