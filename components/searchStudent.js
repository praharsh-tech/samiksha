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

      <!-- INPUT -->
      <div class="flex gap-2 mb-4">
        <input id="searchInput"
          placeholder="Enter PRN or Name"
          class="border p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-indigo-400">

        <button id="searchBtn"
          class="bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-700">
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
      <div class="bg-gray-50 p-4 rounded-xl border">

        <h4 class="font-bold text-lg mb-2 text-indigo-600">
          ${student.profile.name}
        </h4>

        <div class="grid grid-cols-2 gap-3 text-sm">

          <p><b>PRN:</b> ${student.prn}</p>
          <p><b>Branch:</b> ${student.profile.branch}</p>
          <p><b>Year:</b> ${student.profile.year}</p>
          <p><b>Division:</b> ${student.profile.division}</p>

          <p><b>Attendance:</b> ${student.attendance}%</p>
          <p><b>Marks:</b> ${student.marks}</p>

          <p><b>Exam Form:</b> ${student.examForm ? "Filled" : "Not Filled"}</p>

        </div>

      </div>
    `;
  };
}