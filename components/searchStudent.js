/************************************************
 🔍 SEARCH STUDENT COMPONENT
************************************************/

export function renderSearchStudent(containerId, students, findStudentFn) {
  const container = document.getElementById(containerId);

  container.innerHTML = `
    <div class="bg-white p-5 rounded-2xl shadow">

      <h3 class="text-lg font-bold text-indigo-600 mb-4">
        🔍 Search Student
      </h3>

    <div class="flex gap-2 mb-4">
  <input id="searchInput"
    placeholder="Enter PRN or Name"
    class="bg-black text-white border border-gray-700 p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 placeholder-gray-400">

  <button id="searchBtn"
    class="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 rounded-lg hover:scale-105 transition">
    Search
  </button>
</div>
      <!-- RESULT -->
      <div id="searchResult"></div>

    </div>
  `;

  // EVENT
  document.getElementById("searchBtn").onclick = () => {
    const query = document.getElementById("searchInput").value.trim();

    const student = findStudentFn(students, query);

    const resultBox = document.getElementById("searchResult");

    if (!student) {
      resultBox.innerHTML = `
        <p class="text-red-500">❌ Student not found</p>
      `;
      return;
    }

    // DISPLAY FULL DATA
   resultBox.innerHTML = `
  <div class="bg-neutral-900 border border-gray-700 p-6 rounded-2xl shadow-lg mt-4 animate-fade">

   <div class="flex justify-between items-start mb-4">

  <div class="flex items-center gap-4">

    <!-- IMAGE -->
    <img src="${student.pfp || '../assets/default.png'}"
      class="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-md" />

    <!-- NAME -->
    <div>
      <h4 class="text-xl font-bold text-cyan-400 tracking-wide">
        ${student.profile.name}
      </h4>
      <p class="text-sm text-gray-400">${student.prn}</p>
    </div>

  </div>

  <span class="px-4 py-1.5 text-xs rounded-full font-semibold ${
    student.attendance < 75
      ? "bg-red-500/20 text-red-400"
      : "bg-green-500/20 text-green-400"
  }">
    ${student.attendance < 75 ? "⚠ Low" : "✔ Good"}
  </span>

</div>

    <!-- GRID INFO -->
    <div class="grid grid-cols-2 gap-4 text-sm text-gray-300">

      <div>
        <p class="text-gray-400">Branch</p>
        <p class="text-white font-medium">${student.profile.branch}</p>
      </div>

      <div>
        <p class="text-gray-400">Year</p>
        <p class="text-white font-medium">${student.profile.year}</p>
      </div>

      <div>
        <p class="text-gray-400">Division</p>
        <p class="text-white font-medium">${student.profile.division}</p>
      </div>

      <div>
        <p class="text-gray-400">Marks</p>
        <p class="text-cyan-400 font-bold">${student.marks}</p>
      </div>

    </div>

    <!-- PROGRESS BAR -->
    <div class="mt-5">

      <p class="text-sm text-gray-400 mb-1">Attendance</p>

      <div class="w-full bg-gray-800 rounded-full h-2">
        <div 
          class="h-2 rounded-full ${
            student.attendance < 75 ? "bg-red-500" : "bg-green-400"
          }"
          style="width: ${student.attendance}%">
        </div>
      </div>

      <p class="text-xs mt-1 text-gray-400">
        ${student.attendance}%
      </p>

    </div>

    <!-- FOOTER -->
    <div class="mt-4 text-sm text-gray-400">
      Exam Form: 
      <span class="${
        student.examForm ? "text-green-400" : "text-red-400"
      } font-medium">
        ${student.examForm ? "✔ Filled" : "❌ Not Filled"}
      </span>
    </div>

  </div>
`;
  };
}