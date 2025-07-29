<template>
  <article class="card my-3 px-4 py-3">
    <div class="card-body">
      <div class="w-100 d-flex align-items-center">
        <h3 class="me-3 card-title">{{ meeting.date | date }}</h3>
        <div>{{ time(meeting.startTime, meeting.endTime) }}</div>
      </div>
      <div class="card-subtitle mb-2 text-muted">{{ meeting.name }}</div>
      <p class="card-text mb-2">{{ meeting.description }}</p>
      <button
        id=""
        class="btn btn-danger mb-1"
        @click="excuseYourSelf(meeting._id)"
        :disabled="loading"
      >
        Excuse yourself
      </button>
      <hr class="hrStyle" />
      <form @submit.prevent="addMember(meeting._id)">
        <p class="my-3">
          <span class="fw-bold">Attendees:</span>
          {{ attendeesStr(meeting.attendees) }}
        </p>
        <div class="d-flex">
          <select class="form-select w-auto" v-model="member">
            <option value="">Select Member</option>
            <option
              v-for="(user, i) in $store.state.manageUsers.registeredUsers"
              :key="i"
              :value="user._id"
            >
              {{ user.email }}
            </option>
          </select>
          <button class="btn btnBg mx-3" :disabled="loading">Add</button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import {
  attendeesStr,
  addMember,
  excuseYourSelf,
} from "@/services/manageUsers";
import Vue from "vue";
import config from "@/config";

export default {
  name: "MeetingResults",
  props: {
    meeting: Object,
    searchMeetings: Function,
  },
  data() {
    return {
      member: "",
      STATUS: "",
      loading: false,
    };
  },
  methods: {
    attendeesStr(attendees) {
      return attendeesStr(attendees);
    },

    time(startTime, endTime) {
      return `${startTime.hours}:${startTime.minutes} - ${endTime.hours}:${endTime.minutes}`;
    },

    async addMember(id) {
      this.loading = true;
      const data = await addMember("meetings", "add_attendee", id, this.member);

      if (!data) this.loading = false;

      Vue.$toast.success("Member added successfully", {
        duration: config.toastDuration,
      });
      this.loading = false;
      this.searchMeetings();
    },

    async excuseYourSelf(id) {
      this.loading = true;
      const data = await excuseYourSelf("meetings", "remove_attendee", id);

      if (!data) this.loading = false;

      Vue.$toast.success(`You have successfully left ${data.name}`, {
        duration: config.toastDuration,
      });

      this.loading = false;
      this.searchMeetings();
    },
  },
};
</script>

<style scoped></style>
