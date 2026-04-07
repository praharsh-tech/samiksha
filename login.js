import { students } from "./Data/studentDatabase.js";
import { users } from "./Data/allDatabase.js";

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorMsg.classList.add("hidden");

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let user = null;

  if (window.currentRole === "student") {
    user = students.find(
      (s) => s.prn === username && s.password === password
    );

    if (user) {
      localStorage.setItem("loggedInStudent", JSON.stringify(user));
      window.location.href = "./dashboard/dashboard.html";
      return;
    }
  } else {
    user = users.find(
      (u) =>
        u.username === username &&
        u.password === password &&
        u.role === window.currentRole
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      if (user.role === "hod") {
        window.location.href = "./HOD/hod.html";
      } else {
        window.location.href = "./principal/principal.html";
      }
      return;
    }
  }

  errorMsg.classList.remove("hidden");
});