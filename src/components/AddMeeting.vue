<template>
  <section class="bg py-3 px-4 rounded-3 my-4">
    <h3 class="text-white fw-bold">Add a new meeting</h3>
    <hr class="hrStyle" />
    <form @submit.prevent="addMeeting">
      <div class="mb-3 form-group">
        <label for="name" class="form-label mb-1">Name of the Meeting</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Title of the meeting"
          class="form-control"
          v-model="meeting.name"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="date" class="form-label mb-1">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          class="form-control"
          v-model="meeting.date"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="startTime" class="form-label mb-1"
          >Start Time (hh:mm)</label
        >
        <input
          type="time"
          name="startTime"
          id="startTime"
          class="form-control w-auto"
          v-model="startTime"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="endTime" class="form-label mb-1">End Time (hh:mm)</label>
        <input
          type="time"
          name="endTime"
          id="endTime"
          class="form-control w-auto"
          v-model="endTime"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="description" class="form-label mb-1">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="What is the agenda of the meeting?"
          class="form-control"
          v-model="meeting.description"
        ></textarea>
      </div>
      <div class="mb-3 form-group">
        <label for="attendees" class="form-label mb-1"
          >EmailIDs of attendees, or team's short</label
        >
        <input
          type="text"
          name="attendees"
          id="attendees"
          placeholder="john@example.com, @annual-day, mark@example.com"
          class="form-control"
          v-model="attendees"
        />
        <small class="text-white"
          >Separate emailids / team short names by commas - team short names
          always begin with @</small
        >
      </div>
      <div class="my-2">
        <button class="btn btnBg text-white" type="submit" :disabled="loading">
          Add meeting
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { addMeeting } from "@/services/meetings";
import Vue from "vue";
import config from "@/config";

export default {
  name: "AddMeeting",
  data() {
    return {
      loading: false,
      meeting: {
        name: "",
        description: "",
        date: "",
        startTime: {
          hours: "",
          minutes: "",
        },
        endTime: {
          hours: "",
          minutes: "",
        },
        attendees: [],
      },
      startTime: "",
      endTime: "",
      attendees: [],
    };
  },
  methods: {
    async addMeeting() {
      const attendees = this.attendees.split(",");
      this.meeting.attendees = attendees.map((attendee) => attendee.trim());
      this.meeting.startTime = {
        hours: this.startTime.split(":")[0],
        minutes: this.startTime.split(":")[1],
      };
      this.meeting.endTime = {
        hours: this.endTime.split(":")[0],
        minutes: this.endTime.split(":")[1],
      };

      this.loading = true;
      const data = await addMeeting(this.meeting);

      if (!data) this.loading = false;

      Vue.$toast.success(`Meeting added successfully!!`, {
        duration: config.toastDuration,
      });

      this.loading = false;
    },
  },
};
</script>

<style></style>
