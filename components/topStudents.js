export function renderTopStudents(containerId, students) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow">

      <h3 class="text-lg font-bold mb-4 text-cyan-400">
        🏆 Top Performers
      </h3>

      <div class="space-y-3">

        ${students.map((s, index) => {

          let badgeColor = "bg-gray-500 text-white";

          if (index === 0) badgeColor = "bg-yellow-400 text-black";
          else if (index === 1) badgeColor = "bg-gray-300 text-black";
          else if (index === 2) badgeColor = "bg-orange-400 text-black";

          return `
            <div class="flex justify-between items-center bg-white/10 border border-white/10 p-4 rounded-xl hover:bg-white/20 transition">

              <div class="flex items-center gap-3">

                <span class="px-3 py-1 rounded-full text-sm font-bold ${badgeColor}">
                  #${index + 1}
                </span>

                <div>
                  <p class="font-semibold text-white">${s.profile.name}</p>
                  <p class="text-xs text-gray-300">${s.profile.branch}</p>
                </div>

              </div>

              <div class="text-right">
                <p class="font-bold text-cyan-400 text-lg">${s.marks}</p>
                <p class="text-xs text-gray-300">Marks</p>
              </div>

            </div>
          `;
        }).join("")}

      </div>
    </div>
  `;
}