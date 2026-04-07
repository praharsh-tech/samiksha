/************************************************
 ⚠️ ALERTS COMPONENT
************************************************/

export function renderAlerts(containerId, students) {
  const container = document.getElementById(containerId);

  if (!students.length) {
    container.innerHTML = `
      <div class="bg-white p-5 rounded-2xl shadow">
        <h3 class="text-lg font-bold text-green-600 mb-3">
          ✅ No Alerts
        </h3>
        <p class="text-gray-500">All students have good attendance.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="bg-white p-5 rounded-2xl shadow">

      <h3 class="text-lg font-bold text-red-500 mb-4">
        ⚠️ Low Attendance Students
      </h3>

      <div class="space-y-3">

        ${students.map(s => {

          let level = "";
          let color = "";

          if (s.attendance < 50) {
            level = "Critical";
            color = "text-red-600";
          } else {
            level = "Warning";
            color = "text-yellow-600";
          }

          return `
            <div class="flex justify-between items-center bg-red-50 p-3 rounded-lg border-l-4 border-red-400">

              <div>
                <p class="font-semibold">${s.profile.name}</p>
                <p class="text-xs text-gray-500">${s.profile.branch}</p>
              </div>

              <div class="text-right">
                <p class="font-bold ${color}">${s.attendance}%</p>
                <p class="text-xs ${color}">${level}</p>
              </div>

            </div>
          `;
        }).join("")}

      </div>

    </div>
  `;
}