<template>
  <article>
    <div class="h-100">
      <div class="team-detail d-flex flex-column justify-content-evenly">
        <div>
          <h3>name</h3>
          <p>@shortName</p>
        </div>
        <p class="my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit
          repellendus eveniet quis dolore veritatis? Culpa maiores tempora
          veniam provident. Adipisci eaque porro sunt iste distinctio vitae amet
          hic laborum.
        </p>
        <div>
          <button class="my-1 btn btn-danger">Excuse yourself</button>
        </div>
      </div>
      <hr class="hrStyle" />
      <div class="d-flex flex-column justify-content-between">
        <p class="addMembersList">
          <span class="fw-bold">Members:</span>
        </p>
        <form
          class="d-flex align-items-center justify-content-between form-group mb-2"
        >
          <select
            class="form-select"
            name="members-selected"
            id="selectedMember"
          >
            <option value="">Select Member</option>
            <option value="">Select Member</option>
            <option value="">Select Member</option>
            <option value="">Select Member</option>
          </select>
          <button class="btn btnBg text-white mx-2" type="submit">Add</button>
        </form>
      </div>
    </div>
  </article>
  <!-- <div class="team-card">
  </div> -->
</template>

<script>
export default {
  name: "TeamCard",
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
  max-height: 100px;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
}

.team-detail p:nth-child(2) {
  color: gray;
}

.addMembersList {
  height: 100px;
  overflow: auto;
}
</style>
