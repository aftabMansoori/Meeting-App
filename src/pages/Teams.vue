<template>
  <section>
    <h1 class="fw-bold">Teams</h1>
    <hr class="hrStyle" />
    <p class="text-secondary">View and edit teams you are part of</p>
    <div class="row m-0 gy-3">
      <TeamCard
        v-for="index in 5"
        :key="index"
        class="col-lg-4 col-md-6 col-12"
      />
      <AddTeamCard class="col-lg-4 col-md-6 col-12" />
    </div>
  </section>
</template>

<script>
import TeamCard from "@/components/TeamCard";
import AddTeamCard from "./AddTeamCard";

export default {
  name: "TeamsPage",
  components: {
    TeamCard,
    AddTeamCard,
  },
};
</script>

<style scoped>
section {
  padding: 2rem 0em;
}
</style>
