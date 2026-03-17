import { students } from "./Data/database.js";
import { users } from "./Data/database.js";

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let user = null;

  /***********************
   🎓 STUDENT LOGIN
  ***********************/
  if (currentRole === "student") {
    user = students.find(
      (s) => s.prn === username && s.password === password
    );

    if (user) {
      localStorage.setItem(
        "loggedInStudent",
        JSON.stringify({
          id: user.id,
          prn: user.prn,
          name: user.profile.name,
          branch: user.profile.branch,
          year: user.profile.year,
          division: user.profile.division,
          attendance: user.attendance,
          marks: user.marks,
          examForm: user.examForm
        })
      );

      window.location.href = "./dashboard/dashboard.html";
      return;
    }
  }

  /***********************
   👨‍🏫 HOD / 👨‍💼 PRINCIPAL
  ***********************/
  else {
    user = users.find(
      (u) =>
        u.username === username &&
        u.password === password &&
        u.role === currentRole
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      if (user.role === "hod") {
        window.location.href = "./HOD/hod.html";
      } else if (user.role === "principal") {
        window.location.href = "./principal/principal.html";
      }

      return;
    }
  }

  /***********************
   ❌ ERROR
  ***********************/
  errorMsg.classList.remove("hidden");
});