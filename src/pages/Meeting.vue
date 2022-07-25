<template>
  <section>
    <h1 class="fw-bold">
      <span><i class="fa-solid fa-building"></i></span> Meetings
    </h1>
    <hr class="hrStyle" />
    <div>
      <!-- <b-nav tabs>
        <b-nav-item
          v-for="tab in navTabs"
          :key="tab.id"
          @click="setActive(tab.id)"
          active
          >{{ tab.label }}</b-nav-item
        >
      </b-nav> -->
      <ul class="nav nav-tabs">
        <li
          class="nav-item"
          v-for="tab in navTabs"
          :key="tab.id"
          @click="setActive(tab.id)"
        >
          <span
            class="nav-link btn"
            :class="activeTab === tab.id ? 'active' : ''"
          >
            {{ tab.label }}
          </span>
        </li>
      </ul>
    </div>
    <template v-if="activeTab === 1">
      <SearchMeeting />
    </template>
    <template v-else-if="activeTab === 2">
      <AddMeeting />
    </template>
  </section>
</template>

<script>
import AddMeeting from "@/components/AddMeeting";
import SearchMeeting from "@/components/SearchMeeting";

export default {
  name: "MeetingPage",
  data() {
    return {
      activeTab: 1,
      navTabs: [
        {
          label: "Filter/Search meetings",
          path: "/meetings/search-meetings",
          id: 1,
        },
        {
          label: "Add a meeting",
          path: "/meetings/add-meetings",
          id: 2,
        },
      ],
    };
  },
  components: {
    AddMeeting,
    SearchMeeting,
  },
  methods: {
    setActive(id) {
      this.activeTab = id;
    },
  },
};
</script>

<style scoped>
section {
  padding: 2rem 0em;
}
</style>
