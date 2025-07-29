import { getCalenderMeets } from "../services/calender.js";

const meetContainer = document.getElementById("meetingContainer");
const selectedDateEl = document.getElementById("selectedDate");

const meetDetail = (meet) => {
  const liEl = document.querySelectorAll("#meetingContainer li");
  meet.forEach((time) => {
    let index = time.startTime.hours;
    let cal =
      time.endTime.hours +
      time.endTime.minutes / 60 -
      time.startTime.hours +
      time.endTime.minutes / 60;
    console.log(cal);
    liEl[index].innerHTML = `
          <article>
            <div class="meet1 px-1" style="height: ${cal * 100}%">
              <h6>${time.name}</h6>
              <hr class="meet-hr" />
              <p>
                ${time.description}
              </p>
            </div>
          </article>     
        `;
  });
};

const calender = () => {
  let timeBox = "";
  for (let i = 0; i < 24; i++) {
    timeBox += `<li><article></article></li>`;
  }

  return timeBox;
};

const viewCalender = () => {
  const dateEl = document.getElementById("date");

  dateEl.addEventListener("change", async (e) => {
    const selectedDate = e.target.value;

    const d = new Date(selectedDate).toString().split(" ");

    const date = `${d[2]} ${d[1]} ${d[3]}`;
    const day = d[0];

    selectedDateEl.innerHTML = `
          <h2>${date}</h2>
          <h3>${day}</h3>
    `;

    try {
      const res = await getCalenderMeets(selectedDate);

      meetContainer.innerHTML = `
          <ol start="0" id="meetings">
            ${calender()}
          </ol>`;

      meetDetail(res);
    } catch (err) {
      const message = err.message;
      console.log(message);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  meetContainer.innerHTML = `
      <div class="calender-tip">
        <h2>Please select a date for checking your meetings</h2>
        <h2> on the calender</h2>
      </div>
    `;

  viewCalender();
});
