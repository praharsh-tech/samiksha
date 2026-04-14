/************************************************
 ✅ Student Dashboard Logic (MATCHED TO YOUR DB)
************************************************/


// 🔒 Session check
const studentData = localStorage.getItem("loggedInStudent");

if (!studentData) {
  window.location.href = "../index.html";
}

const student = JSON.parse(studentData);

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     👤 BASIC INFO
  =============================== */

  document.getElementById("studentName").textContent =
    student.profile.name;

  document.getElementById("studentInfo").innerHTML = `
    PRN: <span class="font-medium">${student.prn}</span> |
    ${student.profile.branch} |
    ${student.profile.year} |
    Division ${student.profile.division}
  `;

  /* ===============================
     🎓 BADGES
  =============================== */

  document.getElementById("semesterBadge").textContent =
    "Sem " + student.profile.year;

  document.getElementById("statusBadge").textContent =
    student.examForm ? "Active" : "Pending";

  /* ===============================
     📊 ATTENDANCE (NUMBER)
  =============================== */

  const attendanceEl = document.getElementById("attendancePercent");

  const attendance = student.attendance || 0;

  attendanceEl.textContent = attendance + "%";

  attendanceEl.classList.add(
    attendance < 75 ? "text-red-600" : "text-green-600"
  );

  /* ===============================
     📝 RESULT (NUMBER)
  =============================== */

  const marks = student.marks || 0;
  const resultEl = document.getElementById("resultStatus");

  if (marks < 35) {
    resultEl.textContent = "FAIL";
    resultEl.classList.add("text-red-600");
  } else {
    resultEl.textContent = "PASS";
    resultEl.classList.add("text-green-600");
  }

  /* ===============================
     📝 EXAM FORM (BOOLEAN)
  =============================== */

  const examStatusEl = document.getElementById("examStatus");
  const examDateEl = document.getElementById("examDate");

  if (student.examForm) {
    examStatusEl.textContent = "Filled";
    examStatusEl.classList.add("text-green-600");
  } else {
    examStatusEl.textContent = "Not Filled";
    examStatusEl.classList.add("text-red-600");
  }

  examDateEl.textContent = "Last date: 10 Feb 2026";

  /* ===============================
   🖼 PROFILE SECTION (SAFE)
=============================== */

const img = document.getElementById("profileImg");

img.src = student.pfp;

img.onerror = () => {
  img.onerror = null;
  img.src = "https://i.pravatar.cc/150?img=5";
};

// text
document.getElementById("profileName").textContent =
  student.profile.name;

document.getElementById("profileBranch").textContent =
  student.profile.branch;

document.getElementById("profileYear").textContent =
  student.profile.year;

document.getElementById("profileDiv").textContent =
  student.profile.division;

document.getElementById("profilePRN").textContent =
  student.prn;

// status
const statusEl = document.getElementById("profileStatus");

if (student.examForm) {
  statusEl.textContent = "Active";
  statusEl.className =
    "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm";
} else {
  statusEl.textContent = "Pending";
  statusEl.className =
    "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm";
}

  /* ===============================
     🔓 LOGOUT
  =============================== */

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedInStudent");
    window.location.href = "../index.html";
  });

});