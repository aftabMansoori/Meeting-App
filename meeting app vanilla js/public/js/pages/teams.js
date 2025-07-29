import { getAllTeams, addTeam } from "../services/teams.js";
import {
  getAllRegisterUsers,
  excuseYourSelf,
  addUser,
} from "../services/manageUsers.js";

const teamsEl = document.getElementById("teams");
const msgEl = document.getElementById("msg");

const creatTeam = async (selectedMembersList) => {
  const selectedMembers = document.getElementById("add-team");

  let teamDetails = new Object();

  teamDetails.name = selectedMembers.elements["teamName"].value;
  teamDetails.shortName = selectedMembers.elements["teamSName"].value;
  teamDetails.description = selectedMembers.elements["description"].value;
  teamDetails.members = selectedMembersList;

  try {
    await addTeam(teamDetails);
    msgEl.innerHTML = `<div class="success-msg">Team created successfully</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  } catch (err) {
    msgEl.innerHTML = `<div class="error-msg">${
      JSON.parse(err.message).message
    }</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
  }
};

const selectMemberHandler = () => {
  const selectedMembers = document.getElementById("add-team");
  const addMemberBtnEl = document.getElementById("addMemberBtn");
  const membersEl = document.getElementById("members");

  let selectedMembersList = [];
  addMemberBtnEl.addEventListener("click", function () {
    let member = selectedMembers.elements["selectedMember"].value;
    selectedMembersList.push(member);
    membersEl.textContent += member + ", ";
  });

  selectedMembers.addEventListener("submit", (e) => {
    e.preventDefault();
    creatTeam(selectedMembersList);
  });
};

const addEl = async () => {
  const { membersListEmails } = await getAllRegisterUsers();

  return `
        <article id="add" class="col addTeam">
          <form id="add-team">
            <div>
              <input
                type="text"
                name="teamName"
                id="teamName"
                placeholder="Team name"
              />
            </div>
            <div>
              <input
                type="text"
                name="teamSName"
                id="teamSName"
                placeholder="Team short name"
              />
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="3"
                placeholder="Provide a description for the team"
              ></textarea>
            </div>
            <hr class="hrStyle" />
            <div>
              <p class="my addMembersList">
                <span class="fw-bold">Members:</span>
                <span id="members"></span>
              </p>
              <div class="members-selected">
                <select name="selectedMember" id="selectedMember">
                  <option value="">Select Member</option>
                  ${membersListEmails}
                </select>
                <button id="addMemberBtn" type="button">Add</button>
              </div>
            </div>
            <button id="addTeam" type="submit">Add Team</button>
          </form>
        </article>
  `;
};

const fetchAllTeams = async () => {
  let res = await getAllTeams();
  let { membersListId } = await getAllRegisterUsers();

  let teams = "";
  res.forEach((t, i) => {
    const { name, shortName, description, members, _id } = t;

    const memberStr = members.map((member) => ` ${member.email}`);

    let team = `
      <article id=${shortName} class="col">
        <div class="team-detail">
          <div>
            <h3>${name}</h3>
            <p>@${shortName}</p>
          </div>
          <p class="my">
            ${description}
          </p>
          <div>
            <button id=${_id} class="my excuse-btn">Excuse yourself</button>
          </div>
        </div>
        <hr class="hrStyle" />
        <div class="members-detail">
          <p class="my-1 membersList">
            <span class="fw-bold">Members:</span> ${memberStr.toString()}
          </p>
          <form id=${_id} class="members-selected">
            <select name="members-selected" id="selectedMember">
            <option value="">Select Member</option>
              ${membersListId}
            </select>
            <button type="submit">Add</button>
          </form>
        </div>
      </article>
    `;

    teams += team;
  });

  teamsEl.innerHTML = teams ? teams + (await addEl()) : await addEl();
};

const addSelectedMember = async (e) => {
  e.preventDefault();
  const teamId = e.target.id;
  const attendeeId = e.target.elements["members-selected"].value;

  if (attendeeId === "") {
    msgEl.innerHTML = `<div class="error-msg">Please select the member.</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);

    return;
  }

  try {
    await addUser("teams", "add_member", teamId, attendeeId);
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
  let teamId = e.target.id;

  try {
    await excuseYourSelf("teams", "remove_member", teamId);
    msgEl.innerHTML = `<div class="success-msg">You have left the team.</div>`;
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

document.addEventListener("DOMContentLoaded", async function () {
  await fetchAllTeams();

  selectMemberHandler();

  excuseBtnScriptHandler();
  addSelectedMemberHandler();
});
