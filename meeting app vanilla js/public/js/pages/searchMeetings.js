import { searchMeeting } from "../services/Meetings.js";
import { getAllRegisterUsers } from "../services/manageUsers.js";
import { excuseYourSelf, addUser } from "../services/manageUsers.js";

const meetingResultsEl = document.getElementById("meeting-results");
const searchMeetingFormEl = document.getElementById("search-meeting");
const msgEl = document.getElementById("msg");

const addSelectedMember = async (e) => {
  e.preventDefault();
  const meetId = e.target.id;
  const attendeeId = e.target.elements["members-selected"].value;

  if (attendeeId === "") {
    msgEl.innerHTML = `<div class="error-msg">Please select the member.</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);

    return;
  }

  try {
    await addUser("meetings", "add_attendee", meetId, attendeeId);
    msgEl.innerHTML = `<div class="success-msg">Member added successfully.</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  } catch (err) {
    console.log(err.message);
    msgEl.innerHTML = `<div class="error-msg">${
      JSON.parse(err.message).message
    }</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
  }
};

const addSelectedMemberHandler = () => {
  const selectedMember = document.querySelectorAll(".members-selected");
  selectedMember.forEach((form) => {
    form.addEventListener("submit", addSelectedMember);
  });
};

const excuseYourSelfHandler = async (e) => {
  let meetId = e.target.id;

  try {
    await excuseYourSelf("meetings", "remove_attendee", meetId);
    msgEl.innerHTML = `<div class="success-msg">You have left the meeting.</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  } catch (err) {
    console.log(JSON.parse(err.message).message);
    msgEl.innerHTML = `<div class="error-msg">There was an error.</div>`;
  }
};

const excuseBtnScriptHandler = () => {
  const excuseBtn = document.querySelectorAll(".excuse-btn");
  excuseBtn.forEach((btn) =>
    btn.addEventListener("click", excuseYourSelfHandler)
  );
};

const meetingResults = async (search, period) => {
  let res = await searchMeeting(search, period);
  const { membersListId } = await getAllRegisterUsers();

  let meetings = "";
  res.forEach((meeting) => {
    let { date, startTime, endTime, description, name, attendees, _id } =
      meeting;

    let attendeesStr = attendees.map((attendee) => ` ${attendee.email}`);

    let meet = `
      <article class="meeting">
        <div class="date-and-time">
          <h3>${new Date(date).toDateString()}</h3>
          <p class="mx-1">${startTime.hours}:${startTime.minutes} - ${
      endTime.hours
    }:${endTime.minutes}</p>
        </div>
        <h3>${name}</h3>
        <p class="my-1">${description}</p>
        <button id="${_id}" class="excuse-btn">Excuse yourself</button>
        <hr class="hrStyle" />
        <form id='${_id}' class="members-selected">
          <p class="my-1">
            <span class="fw-bold">Attendees:</span> ${attendeesStr.toString()}
          </p>
          <select name="members-selected" id="">
            <option value="null">Select Member</option>
            ${membersListId}
          </select>
          <button class="mx">Add</button>
        </form>
      </article>`;
    meetings += meet;
  });
  meetingResultsEl.innerHTML = meetings;
};

const searchResults = (e) => {
  e.preventDefault();

  let search = searchMeetingFormEl.elements["search"].value;
  let period = searchMeetingFormEl.elements["date"].value;

  meetingResults(search, period);
};

document.addEventListener("DOMContentLoaded", async function () {
  await meetingResults();
  searchMeetingFormEl.addEventListener("submit", searchResults);
  excuseBtnScriptHandler();
  addSelectedMemberHandler();
});
