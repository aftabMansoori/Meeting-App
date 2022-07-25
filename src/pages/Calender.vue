<template>
  <section>
    <h1 class="fw-bold">
      <span><i class="fa-solid fa-calendar"></i></span> Calender
    </h1>
    <hr class="hrStyle" />
    <div class="d-flex justify-content-between">
      <div>
        <h3>{{ choosedDate }}</h3>
        <h5 class="text-secondary">{{ choosedDay }}</h5>
      </div>
      <div class="form-group">
        <input
          type="date"
          class="form-control"
          v-model="date"
          @change="calenderMeetings"
        />
      </div>
    </div>
    <template v-if="loading">
      <app-loader></app-loader>
    </template>
    <template v-else>
      <div v-if="date">
        <CalenderHours :meetings="meetings" />
      </div>
      <div class="landing-msg" v-else>
        <h3>Please select date to view your meetings.</h3>
      </div>
    </template>
  </section>
</template>

<script>
import CalenderHours from "@/components/CalenderHours.vue";
import { getCalenderMeetings } from "@/services/calender";
import AppLoader from "@/components/utils/AppLoader.vue";

export default {
  name: "ViewCalender",
  components: { CalenderHours, AppLoader },
  data() {
    return {
      date: "",
      loading: false,
      meetings: Array(24).fill(null),
      choosedDate: "",
      choosedDay: "",
    };
  },
  methods: {
    selectedDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = new Date(this.date);
      const dateSelected = date
        .toLocaleDateString(undefined, options)
        .split(",");

      this.choosedDate = dateSelected[1] + dateSelected[2];
      this.choosedDay = dateSelected[0];
    },
    async calenderMeetings() {
      try {
        this.loading = true;
        this.meetings = Array(24).fill(null);

        const data = await getCalenderMeetings(this.date);

        this.selectedDate();

        data.forEach((meet) => {
          this.meetings[meet.startTime.hours] = meet;
        });

        this.loading = false;
      } catch (err) {
        console.log(err.message);
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
section {
  padding: 2rem 0em;
}

input[type="date"] {
  width: 300px;
}

.landing-msg {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
