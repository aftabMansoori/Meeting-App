<template>
  <section>
    <img class="img-fluid w-50" src="@/assets/page-not-found.svg" alt="" />
    <h1 class="my-5">Page not found</h1>
  </section>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
section {
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
