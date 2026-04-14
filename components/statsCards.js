export function renderStatsCards(containerId, stats) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow transition card-hover">
        <h3 class="text-gray-300 text-sm">Total Students</h3>
        <p class="text-3xl font-bold text-white mt-2">${stats.totalStudents}</p>
      </div>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow transition card-hover">
        <h3 class="text-gray-300 text-sm">Departments</h3>
        <p class="text-3xl font-bold text-white mt-2">${stats.totalDepartments}</p>
      </div>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow transition card-hover">
        <h3 class="text-gray-300 text-sm">Avg Attendance</h3>
        <p class="text-3xl font-bold text-green-400 mt-2">${stats.avgAttendance}%</p>
      </div>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow transition card-hover">
        <h3 class="text-gray-300 text-sm">Avg Marks</h3>
        <p class="text-3xl font-bold text-blue-400 mt-2">${stats.avgMarks}</p>
      </div>

    </div>
  `;
}