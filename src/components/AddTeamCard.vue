<template>
  <article>
    <div class="h-100">
      <form @submit.prevent="addTeam">
        <div class="mb-3">
          <input
            type="text"
            placeholder="Team name"
            class="form-control"
            v-model="team.name"
            @blur="$v.team.name.$touch()"
          />
          <!-- <div v-if="$v.team.name.$error" class="text-danger mt-1">
            <div v-if="!$v.team.name.required" class="error-message">
              <small>This email field is required</small>
            </div>
          </div> -->
        </div>
        <div class="mb-3">
          <input
            type="text"
            placeholder="Team short name"
            class="form-control"
            v-model="team.shortName"
            @blur="$v.team.shortName.$touch()"
          />
          <!-- <div v-if="$v.team.shortName.$error" class="text-danger mt-1">
            <div v-if="!$v.team.shortName.required" class="error-message">
              <small>This email field is required</small>
            </div>
          </div> -->
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="description"
            placeholder="Provide a description for a team"
            rows="3"
            v-model="team.description"
            @blur="$v.team.description.$touch()"
          ></textarea>
          <!-- <div v-if="$v.team.description.$error" class="text-danger mt-1">
            <div v-if="!$v.team.description.required" class="error-message">
              <small>This email field is required</small>
            </div>
          </div> -->
        </div>
        <hr class="hrStyle" />
        <div>
          <p class="my-1 addMembersList">
            <span class="fw-bold">Members: </span>
            <span id="members">{{ membersStr }}</span>
          </p>
          <div
            class="d-flex align-items-center justify-content-between form-group"
          >
            <select
              class="form-select"
              v-model="member"
              @blur="$v.team.members.$touch()"
            >
              <option value="">Select Member</option>
              <option
                v-for="(member, i) in $store.state.manageUsers.registeredUsers"
                :key="i"
                :value="member.email"
              >
                {{ member.email }}
              </option>
            </select>
            <button
              id="addMemberBtn"
              class="btn btnBg mx-2 text-white"
              type="button"
              @click="addMember"
            >
              Add
            </button>
          </div>
        </div>
        <button
          class="btn btnBg w-100 mt-2 text-white"
          type="submit"
          :disabled="loading"
        >
          Add Team
          <template v-if="loading"> <app-spinner></app-spinner> </template>
        </button>
        <!-- <div v-if="$v.team.members.$error" class="text-danger mt-1">
          <div v-if="!$v.team.members.required" class="error-message">
            <small>This email field is required</small>
          </div>
        </div> -->
      </form>
    </div>
  </article>
</template>

<script>
import Vue from "vue";
import config from "@/config";
import { addTeam } from "@/services/teams";
import AppSpinner from "./utils/AppSpinner.vue";
import { required } from "vuelidate/lib/validators";

export default {
  components: { AppSpinner },
  name: "AddTeamCard",
  props: {
    getAllTeams: Function,
  },
  data() {
    return {
      team: {
        name: "",
        shortName: "",
        description: "",
        members: [],
      },
      member: "",
      membersStr: "",
      loading: false,
    };
  },
  validations() {
    return {
      team: {
        name: { required },
        shortName: { required },
        description: { required },
        members: { required },
      },
    };
  },
  methods: {
    async addTeam() {
      this.$v.team.$touch();

      if (!this.$v.team.$invalid) {
        this.loading = true;
        const data = await addTeam(this.team);

        if (!data) this.loading = false;

        Vue.$toast.success(`${this.team.name} added successfull!!`, {
          duration: config.toastDuration,
        });

        this.loading = false;
        this.getAllTeams();
      } else {
        Vue.$toast.error("Invalid input values!!", {
          duration: config.toastDuration,
        });
        this.loading = false;
      }
    },
    addMember() {
      this.team.members.push(this.member);
      this.membersStr += this.member + ", ";
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

article > div > div {
  height: 47%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.addMembersList {
  height: 90px;
  overflow: auto;
}

#members {
  font-size: 15px;
}
</style>
