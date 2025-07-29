import { registerUser } from "../services/auth.js";

const form = document.querySelector("#registerUser");
const msgEl = document.querySelector("#msg");

const registerHandler = async (e) => {
  e.preventDefault();

  const name = form.elements["username"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const confPassword = form.elements["confPassword"].value;

  if (!name || !email || !password || !confPassword) {
    msgEl.innerHTML = `<div class="error-msg">Please fill all the inputs</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
    return;
  }

  if (password !== confPassword) {
    msgEl.innerHTML = `<div class="error-msg">Password doesn't match</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  const res = await registerUser(user);

  if (res === "success") window.location = "/login.html";
  else {
    msgEl.innerHTML = `<div class="error-msg">${JSON.parse(res).message}</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", registerHandler);
});
