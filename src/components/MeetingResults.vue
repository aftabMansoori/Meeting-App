<template>
  <article class="card my-3 px-4 py-3">
    <div class="card-boody">
      <div class="w-100 d-flex align-items-center">
        <h3 class="me-3 card-title">{{ meeting.date | date }}</h3>
        <div>{{ time(meeting.startTime, meeting.endTime) }}</div>
      </div>
      <div class="card-subtitle mb-2 text-muted">{{ meeting.name }}</div>
      <p class="card-text mb-2">{{ meeting.description }}</p>
      <button id="" class="btn btn-danger mb-1">Excuse yourself</button>
      <hr class="hrStyle" />
      <form id="" class="">
        <p class="my-3">
          <span class="fw-bold">Attendees:</span>
          {{ attendeesStr(meeting.attendees) }}
        </p>
        <div class="d-flex">
          <select class="form-select w-auto">
            <option value="null">Select Member</option>
            <option
              v-for="(user, i) in $store.state.manageUsers.registeredUsers"
              :key="i"
              :value="user.userId"
            >
              {{ user.email }}
            </option>
          </select>
          <button class="btn btnBg mx-3">Add</button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import { attendeesStr } from "@/services/manageUsers";

export default {
  name: "MeetingResults",
  props: {
    meeting: Object,
  },
  methods: {
    attendeesStr(attendees) {
      return attendeesStr(attendees);
    },
    time(startTime, endTime) {
      return `${startTime.hours}:${startTime.minutes} : ${endTime.hours}:${endTime.minutes}`;
    },
  },
};
</script>

<style scoped></style>
