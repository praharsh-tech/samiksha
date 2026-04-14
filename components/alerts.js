export function renderAlerts(containerId, students) {
  const container = document.getElementById(containerId);

  if (!students.length) {
    container.innerHTML = `
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl">
        <h3 class="text-lg font-bold text-green-400 mb-2">
          ✅ No Alerts
        </h3>
        <p class="text-gray-300 text-sm">All students have good attendance.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl">

      <h3 class="text-lg font-bold text-red-400 mb-5 tracking-wide">
        ⚠️ Low Attendance Students
      </h3>

      <div class="space-y-3 max-h-80 overflow-y-auto pr-2">

        ${students.map(s => {

          let level = "";
          let color = "";
          let bg = "";
          let border = "";

          if (s.attendance < 50) {
            level = "Critical";
            color = "text-red-400";
            bg = "bg-red-500/10";
            border = "border-red-500";
          } else {
            level = "Warning";
            color = "text-yellow-400";
            bg = "bg-yellow-500/10";
            border = "border-yellow-500";
          }

          return `
            <div class="flex justify-between items-center ${bg} border-l-4 ${border} p-4 rounded-2xl hover:scale-[1.02] transition-all duration-300">

              <div class="flex items-center gap-4">

                <!-- IMAGE -->
                <img src="${s.pfp || '../assets/default.png'}"
                  class="w-11 h-11 rounded-full object-cover border-2 border-white/20 shadow-md" />

                <div>
                  <p class="font-semibold text-white text-sm">${s.profile.name}</p>
                  <p class="text-xs text-gray-400">${s.profile.branch}</p>
                </div>

              </div>

              <div class="text-right">
                <p class="font-bold ${color} text-lg">${s.attendance}%</p>
                <p class="text-xs ${color} tracking-wide">${level}</p>
              </div>

            </div>
          `;
        }).join("")}

      </div>

    </div>
  `;
}