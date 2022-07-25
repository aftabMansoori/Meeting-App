<template>
  <section>
    <h1 class="fw-bold">
      <span><i class="fa-solid fa-users"></i></span> Teams
    </h1>
    <hr class="hrStyle" />
    <p class="text-secondary">View and edit teams you are part of</p>
    <template v-if="loading">
      <app-loader></app-loader>
    </template>
    <template v-else>
      <div class="row m-0 gy-3">
        <TeamCard
          v-for="(team, index) in teams"
          :team="team"
          :key="index"
          class="col-lg-4 col-md-6 col-12"
          :getAllTeams="getAllTeams"
        />
        <AddTeamCard
          class="col-lg-4 col-md-6 col-12"
          :getAllTeams="getAllTeams"
        />
      </div>
    </template>
  </section>
</template>

<script>
import { getTeams } from "@/services/teams";

// Components
import TeamCard from "@/components/TeamCard";
import AddTeamCard from "@/components/AddTeamCard";

export default {
  name: "TeamsPage",
  components: {
    TeamCard,
    AddTeamCard,
  },
  data() {
    return {
      teams: [],
      loading: false,
    };
  },
  methods: {
    async getAllTeams() {
      try {
        this.loading = true;
        const data = await getTeams();
        this.teams = data;
        this.loading = false;
      } catch (err) {
        console.log(err.message);
        this.loading = false;
      }
    },
  },
  created() {
    this.getAllTeams();
  },
};
</script>

<style scoped>
section {
  padding: 2rem 0em;
}
</style>
