/************************************************
 📦 IMPORTS (TOP LEVEL ONLY)
************************************************/
console.log("JS LOADED");

import { students } from "../Data/studentDatabase.js";

import {
  getTotalStudents,
  getDepartments,
  getAverageAttendance,
  getAverageMarks,
  getDeptStats,
  getTopStudents,
  getLowAttendanceStudents,
  findStudent
} from "../components/analytics.js";

import { renderStatsCards } from "../components/statsCards.js";
import { renderDeptGrid } from "../components/deptGrid.js";
import { renderTopStudents } from "../components/topStudents.js";
import { renderAlerts } from "../components/alerts.js";
import { renderSearchStudent } from "../components/searchStudent.js";


/************************************************
 🚀 WAIT FOR DOM
************************************************/

document.addEventListener("DOMContentLoaded", () => {

/************************************************
 🔐 AUTH
************************************************/

const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user || user.role !== "hod") {
  window.location.href = "../index.html";
  return;
}

/************************************************
 👤 INFO
************************************************/

document.getElementById("hodName").textContent =
  "Welcome, " + user.name;

document.getElementById("hodDept").textContent =
  "Department: " + user.dept;

/************************************************
 🎯 FILTER
************************************************/

const deptStudents = students.filter(
  s => s.profile.branch.toLowerCase() === user.dept.toLowerCase()
);

/************************************************
 📊 ANALYTICS
************************************************/

const stats = {
  totalStudents: getTotalStudents(deptStudents),
  totalDepartments: getDepartments(deptStudents).length,
  avgAttendance: getAverageAttendance(deptStudents),
  avgMarks: getAverageMarks(deptStudents)
};

const deptStats = getDeptStats(deptStudents);
const topStudents = getTopStudents(deptStudents, 5);
const lowAttendance = getLowAttendanceStudents(deptStudents, 75);

/************************************************
 🧩 RENDER
************************************************/

renderStatsCards("statsContainer", stats);
renderDeptGrid("deptContainer", deptStats);
renderTopStudents("topStudentsContainer", topStudents);
renderAlerts("alertsContainer", lowAttendance);
renderSearchStudent("searchContainer", deptStudents, findStudent);

/************************************************
 🔓 LOGOUT
************************************************/

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
});

});