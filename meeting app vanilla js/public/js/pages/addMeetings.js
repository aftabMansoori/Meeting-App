import { addMeeting } from "../services/Meetings.js";

const addMeetingEl = document.getElementById("add-meeting");
const msgEl = document.getElementById("message");
// const closeBtnEl = document.getElementById("closeBtn");

const addMeetingHandler = async (e) => {
  e.preventDefault();

  const meetingDetails = new Object();

  meetingDetails.name = addMeetingEl.elements["name"].value;
  meetingDetails.date = addMeetingEl.elements["date"].value;
  meetingDetails.description = addMeetingEl.elements["description"].value;

  //converting the startTime and endTime input into object of hours and minutes
  let startTime = addMeetingEl.elements["startTime"].value.split(":");
  meetingDetails.startTime = {
    hours: startTime[0],
    minutes: startTime[1],
  };

  let endTime = addMeetingEl.elements["endTime"].value.split(":");
  meetingDetails.endTime = {
    hours: endTime[0],
    minutes: endTime[1],
  };

  //trimed all the string values of array and stored
  let attendees = addMeetingEl.elements["attendees"].value.split(",");
  meetingDetails.attendees = attendees.map((attendee) => attendee.trim());

  console.log(meetingDetails);

  try {
    const res = await addMeeting(meetingDetails);

    if (res) {
      msgEl.innerHTML = `<div class="success-msg ">Meeting added successfully.</div>`;
      setTimeout(() => {
        msgEl.innerHTML = "";
      }, 5000);
      setTimeout(() => {
        location = "http://127.0.0.1:8080/search-meetings.html";
      }, 2000);
    } else {
      msgEl.innerHTML = `<div class="error-msg ">There was an error.</div>`;
      setTimeout(() => {
        msgEl.innerHTML = "";
      }, 5000);
    }
  } catch (err) {
    msgEl.innerHTML = `<div class="error-msg flex-space-between">${
      JSON.parse(err.message).message
    }`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
  }
};

addMeetingEl.addEventListener("submit", addMeetingHandler);
