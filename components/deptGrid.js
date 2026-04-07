/************************************************
 🏫 DEPARTMENT GRID COMPONENT
************************************************/

export function renderDeptGrid(containerId, departments) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${departments.map(dept => `
        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition border-l-4 border-indigo-500">

          <h3 class="text-lg font-bold text-indigo-600 mb-2">
            ${dept.name}
          </h3>

          <div class="space-y-1 text-sm text-gray-600">
            <p>👨‍🎓 Students: <b>${dept.count}</b></p>
            <p>📊 Attendance: <b>${dept.avgAttendance}%</b></p>
            <p>🧠 Marks: <b>${dept.avgMarks}</b></p>
          </div>

        </div>
      `).join("")}
    </div>
  `;
}