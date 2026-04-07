/************************************************
 🏆 TOP STUDENTS COMPONENT
************************************************/

export function renderTopStudents(containerId, students) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="bg-white p-5 rounded-2xl shadow">

      <h3 class="text-lg font-bold mb-4 text-indigo-600">
        🏆 Top Performers
      </h3>

      <div class="space-y-3">

        ${students.map((s, index) => {

          let badgeColor = "bg-gray-200 text-gray-700";

          if (index === 0) badgeColor = "bg-yellow-400 text-white";   // 🥇
          else if (index === 1) badgeColor = "bg-gray-400 text-white"; // 🥈
          else if (index === 2) badgeColor = "bg-orange-400 text-white"; // 🥉

          return `
            <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition">

              <div class="flex items-center gap-3">

                <!-- Rank -->
                <span class="px-3 py-1 rounded-full text-sm font-bold ${badgeColor}">
                  #${index + 1}
                </span>

                <!-- Name -->
                <div>
                  <p class="font-semibold">${s.profile.name}</p>
                  <p class="text-xs text-gray-500">${s.profile.branch}</p>
                </div>

              </div>

              <!-- Marks -->
              <div class="text-right">
                <p class="font-bold text-indigo-600">${s.marks}</p>
                <p class="text-xs text-gray-500">Marks</p>
              </div>

            </div>
          `;
        }).join("")}

      </div>
    </div>
  `;
}