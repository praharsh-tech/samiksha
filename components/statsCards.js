/************************************************
 📊 STATS CARDS COMPONENT
************************************************/

export function renderStatsCards(containerId, stats) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="grid md:grid-cols-4 gap-4 mb-6">

      <div class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-gray-500 text-sm">Total Students</h3>
        <p class="text-2xl font-bold text-indigo-600">${stats.totalStudents}</p>
      </div>

      <div class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-gray-500 text-sm">Departments</h3>
        <p class="text-2xl font-bold text-indigo-600">${stats.totalDepartments}</p>
      </div>

      <div class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-gray-500 text-sm">Avg Attendance</h3>
        <p class="text-2xl font-bold text-green-600">${stats.avgAttendance}%</p>
      </div>

      <div class="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h3 class="text-gray-500 text-sm">Avg Marks</h3>
        <p class="text-2xl font-bold text-blue-600">${stats.avgMarks}</p>
      </div>

    </div>
  `;
}