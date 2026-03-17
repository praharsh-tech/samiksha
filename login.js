import { students } from "./Data/database.js";

/************************************************
 ✅ Student Login Logic (Frontend Only)
************************************************/

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const prn = document.getElementById("prn").value.trim();
  const password = document.getElementById("password").value.trim();

  // Find student
  const student = students.find(
    (s) => s.prn === prn && s.password === password
  );

  if (!student) {
    errorMsg.classList.remove("hidden");
    return;
  }

  // Hide error
  errorMsg.classList.add("hidden");
localStorage.setItem(
  "loggedInStudent",
  JSON.stringify({
    id: student.id,
    prn: student.prn,
    name: student.profile.name,
    branch: student.profile.branch,
    year: student.profile.year,
    division: student.profile.division,

    attendance: student.attendance, // ✅ IMPORTANT
    marks: student.marks,           // ✅ IMPORTANT
    examForm: student.examForm
  })
);


  // Redirect (next step)
  window.location.href = "./dashboard/dashboard.html";
});
