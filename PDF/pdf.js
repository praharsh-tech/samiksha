/************************************************
 ✅ PDF Viewer Logic (Frontend Only)
************************************************/

// Get URL parameter (?type=attendance or internal)
const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const titleEl = document.getElementById("pageTitle");
const pdfViewer = document.getElementById("pdfViewer");

// Decide which PDF to show
if (type === "attendance") {
  titleEl.textContent = "Attendance Record";
  pdfViewer.src = "Attendance_30_Students.pdf";

} else if (type === "internal") {
  titleEl.textContent = "Internal Marks Record";
  pdfViewer.src = "Internal_Marks_22IT001.pdf";

} else {
  titleEl.textContent = "Invalid Request";
  pdfViewer.src = "";
}
