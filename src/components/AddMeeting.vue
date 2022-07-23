<template>
  <section class="bg py-3 px-4 rounded-3 my-4">
    <h3 class="text-white fw-bold">Add a new meeting</h3>
    <hr class="hrStyle" />
    <form>
      <div class="mb-3 form-group">
        <label for="name" class="form-label mb-1">Name of the Meeting</label
        ><br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Title of the meeting"
          class="form-control"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="date" class="form-label mb-1">Date</label><br />
        <input type="date" name="date" id="date" class="form-control" />
      </div>
      <div class="mb-3 form-group">
        <label for="startTime" class="form-label mb-1">Start Time (hh:mm)</label
        ><br />
        <input
          type="time"
          name="startTime"
          id="startTime"
          class="form-control w-auto"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="endTime" class="form-label mb-1">End Time (hh:mm)</label
        ><br />
        <input
          type="time"
          name="endTime"
          id="endTime"
          class="form-control w-auto"
        />
      </div>
      <div class="mb-3 form-group">
        <label for="description" class="form-label mb-1">Description</label
        ><br />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="What is the agenda of the meeting?"
          class="form-control"
        ></textarea>
      </div>
      <div class="mb-3 form-group">
        <label for="attendees" class="form-label mb-1"
          >EmailIDs of attendees, or team's short</label
        ><br />
        <input
          type="text"
          name="attendees"
          id="attendees"
          placeholder="john@example.com, @annual-day, mark@example.com"
          class="form-control"
        /><br />
        <small class="text-white"
          >Separate emailids / team short names by commas - team short names
          always begin with @</small
        >
      </div>
      <div class="my-2">
        <button class="btn btnBg text-white" type="submit">Add meeting</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
