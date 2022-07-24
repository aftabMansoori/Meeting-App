<template>
  <section>
    <section class="bg py-3 px-4 rounded-3 mb-4">
      <form @submit.prevent="searchMeetings">
        <div class="mb-3">
          <label for="date" class="form-label">Date</label><br />
          <select class="my-1 form-select" v-model="period">
            <option value="">Select</option>
            <option value="all">All</option>
            <option value="past">PAST</option>
            <option value="present">TODAY</option>
            <option value="future">UPCOMING</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="search" class="form-label">Search for</label><br />
          <textarea
            rows="3"
            placeholder="Search using words which describe the meeting"
            class="form-control"
            v-model="search"
          ></textarea>
        </div>
        <div class="my-2">
          <button class="btn btnBg text-white" type="submit">Search</button>
        </div>
      </form>
    </section>

    <template v-if="STATUS === 'LOADING'">
      <AppLoader />
    </template>
    <section v-if="STATUS === 'LOADED'">
      <h3 class="">Meeting matching search criteria</h3>
      <hr class="hrStyle" />
      <MeetingResults
        v-for="(meeting, i) in meetingResults"
        :key="i"
        :meeting="meeting"
        :searchMeetings="searchMeetings"
      />
    </section>
    <template v-if="STATUS === 'ERROR'">
      <h3 class="">Meeting matching search criteria</h3>
      <hr class="hrStyle" />
      <h1>No Events</h1>
    </template>
  </section>
</template>

<script>
import MeetingResults from "./MeetingResults";
import { searchMeetings } from "@/services/meetings";
import AppLoader from "./utils/AppLoader.vue";

export default {
  name: "AddMeeting",
  components: { MeetingResults, AppLoader },
  data() {
    return {
      period: "",
      search: "",
      meetingResults: [],
      STATUS: "",
    };
  },
  methods: {
    async searchMeetings() {
      this.STATUS = "LOADING";
      const data = await searchMeetings(this.period, this.search);

      if (data.length > 0) {
        this.meetingResults = data;
        this.STATUS = "LOADED";
      } else {
        this.STATUS = "ERROR";
      }
    },
  },
  created() {
    this.searchMeetings();
  },
};
</script>

<style></style>
