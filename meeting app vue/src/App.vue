<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-custom-blue {
  color: #4493c2;
}

.hrStyle {
  border: 1px solid #b2aeae;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
}

.bg {
  background-color: #85c4e8;
}

.btnBg {
  background-color: #4493c2;
  color: #fff;
}

.btnBg:hover {
  background-color: #3c86b1;
  color: rgb(244, 235, 235);
}

hr {
  margin: 0.5em 0;
}
</style>
