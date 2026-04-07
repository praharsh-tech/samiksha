/************************************************
 📦 IMPORTS
************************************************/

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
 🔐 AUTH PROTECTION
************************************************/

const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user || user.role !== "principal") {
  window.location.href = "../index.html";
}


/************************************************
 👤 LOAD USER INFO
************************************************/

document.getElementById("principalName").textContent =
  "Welcome, " + user.name;


/************************************************
 📊 PREPARE DATA (ANALYTICS)
************************************************/

const totalStudents = getTotalStudents(students);

const departments = getDepartments(students);

const avgAttendance = getAverageAttendance(students);

const avgMarks = getAverageMarks(students);

const deptStats = getDeptStats(students);

const topStudents = getTopStudents(students, 5);

const lowAttendance = getLowAttendanceStudents(students, 75);


/************************************************
 🧩 RENDER COMPONENTS
************************************************/

// 📊 Stats Cards
renderStatsCards("statsContainer", {
  totalStudents: totalStudents,
  totalDepartments: departments.length,
  avgAttendance: avgAttendance,
  avgMarks: avgMarks
});

// 🏫 Department Grid
renderDeptGrid("deptContainer", deptStats);

// 🏆 Top Students
renderTopStudents("topStudentsContainer", topStudents);

// ⚠️ Alerts
renderAlerts("alertsContainer", lowAttendance);

// 🔍 Search
renderSearchStudent("searchContainer", students, findStudent);


/************************************************
 🔓 LOGOUT
************************************************/

window.logout = function () {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
};