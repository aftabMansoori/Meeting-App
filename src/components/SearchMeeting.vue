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
          <button
            class="btn btnBg text-white"
            type="submit"
            :disabled="STATUS === 'LOADING'"
          >
            Search
            <template v-if="STATUS === 'LOADING'">
              <app-spinner></app-spinner>
            </template>
          </button>
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
    <section v-if="STATUS === 'ERROR'">
      <h3 class="">Meeting matching search criteria</h3>
      <hr class="hrStyle" />
      <div
        class="d-flex flex-column align-items-center justify-content-center my-5"
      >
        <img src="@/assets/no-data.svg" class="img-fluid w-25" alt="" />
        <h1 class="mt-5">No Events</h1>
      </div>
    </section>
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
