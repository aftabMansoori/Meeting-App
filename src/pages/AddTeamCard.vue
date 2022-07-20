<template>
  <article>
    <div class="h-100">
      <form>
        <div class="mb-3">
          <input
            type="text"
            name="teamName"
            id="teamName"
            placeholder="Team name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            name="teamSName"
            id="teamSName"
            placeholder="Team short name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="description"
            placeholder="Provide a description for a team"
            rows="3"
          ></textarea>
        </div>
        <hr class="hrStyle" />
        <div>
          <p class="my-1 addMembersList">
            <span class="fw-bold">Members:</span>
            <span id="members"></span>
          </p>
          <div
            class="d-flex align-items-center justify-content-between form-group"
          >
            <select
              name="selectedMember"
              class="form-select"
              id="selectedMember"
            >
              <option value="">Select Member</option>
              <option value="">Select Member</option>
              <option value="">Select Member</option>
            </select>
            <button
              id="addMemberBtn"
              class="btn btnBg mx-2 text-white"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
        <button class="btn btnBg w-100 mt-2 text-white" type="submit">
          Add Team
        </button>
      </form>
    </div>
  </article>
  <!-- <div class="team-card">
  </div> -->
</template>

<script>
export default {
  name: "AddTeamCard",
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
</style>
