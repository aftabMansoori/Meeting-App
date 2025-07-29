const menuBtnEl = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");
const userNameEl = document.getElementById("user-name");
const logoutEl = document.getElementById("logout");

menuBtnEl.addEventListener("click", () => {
  mobileMenuEl.classList.toggle("d-none");
});

logoutEl.addEventListener("click", () => {
  localStorage.clear();
  window.location = "/login.html";
});

userNameEl.textContent = localStorage.getItem("name");
