/************************************************
 ✅ Student Dashboard Logic (Frontend Only)
************************************************/

// 🔒 Session check
const studentData = localStorage.getItem("loggedInStudent");
if (!studentData) {
  window.location.href = "../index.html";
}

const student = JSON.parse(studentData);

// 🚀 Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     👤 BASIC INFO
  =============================== */
  document.querySelector("h2 span").textContent = student.name;

  document.querySelector(
    "section p.text-sm.text-gray-600"
  ).innerHTML = `
    PRN: <span class="font-medium">${student.prn}</span> |
    ${student.branch} | ${student.year} | Division ${student.division}
  `;

  /* ===============================
     📊 ATTENDANCE CALCULATION
  =============================== */
  const attendanceValues = Object.values(student.attendance);
  const totalAttendance = attendanceValues.reduce(
    (sum, val) => sum + val,
    0
  );
  const avgAttendance = Math.round(
    totalAttendance / attendanceValues.length
  );

  const attendanceEl = document.getElementById("attendancePercent");
  attendanceEl.textContent = `${avgAttendance}%`;

  // Color logic
  attendanceEl.classList.remove("text-green-600", "text-red-600");
  attendanceEl.classList.add(
    avgAttendance < 75 ? "text-red-600" : "text-green-600"
  );

  /* ===============================
     📝 RESULT CALCULATION
  =============================== */
  const marks = Object.values(student.marks);
  const isFail = marks.some(mark => mark < 18);

  const resultEl = document.getElementById("resultStatus");

  if (isFail) {
    resultEl.textContent = "FAIL";
    resultEl.classList.remove("text-blue-600");
    resultEl.classList.add("text-red-600");
  } else {
    resultEl.textContent = "PASS";
    resultEl.classList.remove("text-red-600");
    resultEl.classList.add("text-green-600");
  }

  /* ===============================
     📝 EXAM FORM STATUS
  =============================== */
  const examStatusEl = document.querySelector(
    "section:last-of-type p.text-lg"
  );
  const examDateEl = document.querySelector(
    "section:last-of-type p.text-sm"
  );

  if (student.examForm.filled) {
    examStatusEl.textContent = "Filled";
    examStatusEl.classList.add("text-green-600");
    examStatusEl.classList.remove("text-red-600");
  } else {
    examStatusEl.textContent = "Not Filled";
    examStatusEl.classList.add("text-red-600");
    examStatusEl.classList.remove("text-green-600");
  }

  examDateEl.textContent = `Last date: ${student.examForm.lastDate}`;
});

/* ===============================
   🔓 LOGOUT
=============================== */
document.querySelector("button").addEventListener("click", () => {
  localStorage.removeItem("loggedInStudent");
  window.location.href = "../index.html";
});
