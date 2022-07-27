<template>
  <ol start="0">
    <li v-for="(meet, index) in meetings" :key="index">
      <template v-if="meet === null">
        <article></article>
      </template>
      <template v-else>
        <article>
          <div
            class="meetBox px-3"
            :style="`height: ${cal(meet)}% ; marginTop: ${margin(meet)}rem`"
          >
            <h6 class="fw-bold my-2">{{ meet.name }}</h6>
            <hr class="meet-hr" />
            <p><span class="fw-bold">Attendes:</span> {{ attendees(meet) }}</p>
          </div>
        </article>
      </template>
    </li>
  </ol>
</template>

<script>
export default {
  name: "CalenderHours",
  props: {
    meetings: Array,
  },
  methods: {
    cal(meet) {
      return (
        (meet.endTime.hours -
          meet.startTime.hours +
          meet.endTime.minutes / 60 -
          meet.startTime.minutes / 60 +
          +1) *
          100 +
        (meet.startTime.minutes > 0 ? (meet.endTime.minutes / 60) * 100 : 0)
      );
    },
    margin(meet) {
      const margin = (meet.startTime.minutes / 60) * 3;
      return margin;
    },
    attendees(meet) {
      let attendeesStr = "";
      meet.attendees.forEach((attendee) => {
        attendeesStr += attendee.email + ", ";
      });
      return attendeesStr;
    },
  },
};
</script>

<style scoped>
section li article {
  height: 70px;
  background-color: #85c4e8;
  margin: 0.5em 0;
  padding: 0.4em 1.5em;
}

.meetBox {
  background-color: #e6e4e4;
  overflow: auto;
  position: relative;
  opacity: 0.9;
}
</style>
