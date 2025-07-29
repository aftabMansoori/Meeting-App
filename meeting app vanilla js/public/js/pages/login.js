import { loginUser } from "../services/auth.js";

const loginFormEl = document.getElementById("loginForm");
const msgEl = document.getElementById("msg");

const loginHandler = async (e) => {
  e.preventDefault();

  const user = new Object();
  user.email = loginFormEl.elements["email"].value;
  user.password = loginFormEl.elements["password"].value;

  if (user.email === "" || user.password === "") {
    msgEl.innerHTML = `<div class="error-msg ">Please fill all the input fields</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);

    return;
  }

  try {
    const res = await loginUser(user);
    window.location = "/index.html";
  } catch (err) {
    msgEl.innerHTML = `<div class="error-msg ">Credentials do not match</div>`;
    setTimeout(() => {
      msgEl.innerHTML = "";
    }, 5000);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  loginFormEl.addEventListener("submit", loginHandler);
});
