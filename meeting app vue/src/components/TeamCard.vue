<template>
  <article>
    <div class="h-100">
      <div class="team-detail d-flex flex-column justify-content-between">
        <div>
          <h3 class="fw-bold">{{ team.name }}</h3>
          <p class="fw-bold">@{{ team.shortName }}</p>
        </div>
        <p class="my-1">
          {{ team.description }}
        </p>
        <div>
          <small class="text-muted" v-b-modal="team._id">view more</small>
          <b-modal
            :id="team._id"
            :title="`${team.name} team description`"
            ok-only
            centered
          >
            <p>{{ team.description }}</p>
          </b-modal>
        </div>
        <div>
          <button
            class="my-1 btn btn-danger"
            @click="excuseYourSelf(team._id)"
            :disabled="loading"
          >
            Excuse yourself
          </button>
        </div>
      </div>
      <hr class="hrStyle" />
      <div class="d-flex flex-column justify-content-between">
        <p class="addMembersList">
          <span class="fw-bold">Members:</span>
          {{ attendees(team.members) }}
        </p>
        <form
          class="d-flex align-items-center justify-content-between form-group my-2"
          @submit.prevent="addMember(team._id)"
        >
          <select class="form-select" v-model="member">
            <option value="">Select Member</option>
            <option
              v-for="(member, i) in $store.state.manageUsers.registeredUsers"
              :key="i"
              :value="member._id"
            >
              {{ member.email }}
            </option>
          </select>
          <button
            class="btn btnBg text-white mx-2"
            type="submit"
            :disabled="loading"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
import Vue from "vue";
import config from "@/config";
import {
  attendeesStr,
  excuseYourSelf,
  addMember,
} from "@/services/manageUsers";

export default {
  name: "TeamCard",
  props: {
    team: Object,
    getAllTeams: Function,
  },
  data() {
    return {
      member: "",
      loading: false,
    };
  },
  methods: {
    attendees(members) {
      return attendeesStr(members);
    },

    async excuseYourSelf(id) {
      this.loading = true;
      const data = await excuseYourSelf("teams", "remove_member", id);

      if (!data) this.loading = false;

      Vue.$toast.success(`You have successfully left ${data.name}`, {
        duration: config.toastDuration,
      });

      this.loading = false;
      this.getAllTeams();
    },

    async addMember(id) {
      this.loading = true;
      const data = await addMember("teams", "add_member", id, this.member);

      if (!data) this.loading = false;

      Vue.$toast.success("Member added successfully", {
        duration: config.toastDuration,
      });

      this.loading = false;
      this.getAllTeams();
    },
  },
};
</script>

<style scoped>
article > div {
  border: 1px solid #d7cfcf;
  padding: 1em;
  border-radius: 5px;
  min-height: 400px;
}

.team-detail > p {
  height: 70px;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
  font-size: 15px;
}

.team-detail p:nth-child(2) {
  color: gray;
}

.addMembersList {
  height: 120px;
  overflow: auto;
  font-size: 15px;
}

.addMembersList::-webkit-scrollbar {
  width: 0px;
}
</style>
