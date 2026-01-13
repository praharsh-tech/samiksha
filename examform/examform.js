/************************************************
 ✅ Exam Form Logic (Frontend Only) – FIXED
************************************************/

// 🔒 Session check
const data = localStorage.getItem("loggedInStudent");
if (!data) {
  window.location.href = "../index.html";
}

const student = JSON.parse(data);
const { jsPDF } = window.jspdf;

// ===============================
// 📌 GET DOM ELEMENTS (ONCE)
// ===============================
const examTypeEl = document.getElementById("examType");
const examCenterEl = document.getElementById("examCenter");
const mobileEl = document.getElementById("mobile");
const emailEl = document.getElementById("email");
const txnIdEl = document.getElementById("txnId");
const paymentConfirmEl = document.getElementById("paymentConfirm");
const declarationEl = document.getElementById("declaration");
const form = document.getElementById("examForm");
const statusMsg = document.getElementById("statusMsg");

// ===============================
// 👤 Fill student info
// ===============================
document.getElementById("studentName").textContent = student.name;
document.getElementById("studentPRN").textContent = student.prn;
document.getElementById("branch").textContent = student.branch;
document.getElementById("semester").textContent = student.examForm.semester;

// ===============================
// 📝 SUBMIT HANDLER
// ===============================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ✅ READ VALUES SAFELY
  const examType = examTypeEl.value;
  const examCenter = examCenterEl.value.trim();
  const mobile = mobileEl.value.trim();
  const email = emailEl.value.trim();
  const txnId = txnIdEl.value.trim();

  const subjects = [
    ...form.querySelectorAll("input[type='checkbox']:checked")
  ].map(cb => cb.value);

  // ===============================
  // ❗ VALIDATION
  // ===============================
  if (!examType || !examCenter || !txnId) {
    alert("Please fill all required fields.");
    return;
  }

  if (subjects.length === 0) {
    alert("Please select at least one subject.");
    return;
  }

  if (!paymentConfirmEl.checked) {
    alert("Please confirm payment.");
    return;
  }

  if (!declarationEl.checked) {
    alert("Please accept the declaration.");
    return;
  }

  // ===============================
  // 💾 SAVE STATE (SIMULATE BACKEND)
  // ===============================
  student.examForm.filled = true;
  student.examForm.subjects = subjects;
  student.examForm.txnId = txnId;
  student.examForm.submittedOn = new Date().toLocaleDateString();

  localStorage.setItem("loggedInStudent", JSON.stringify(student));

  // ===============================
  // 📄 GENERATE PDF
  // ===============================
  generatePDF({
    examType,
    examCenter,
    mobile,
    email,
    txnId,
    subjects
  });

  statusMsg.textContent = "Exam form submitted & PDF generated successfully.";
  statusMsg.classList.remove("hidden");
  statusMsg.classList.add("text-green-600");
});

// ===============================
// 📄 PDF FUNCTION
// ===============================
function generatePDF(data) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("College Examination Form", 20, 20);

  doc.setFontSize(12);
  doc.text(`Name: ${student.name}`, 20, 40);
  doc.text(`PRN: ${student.prn}`, 20, 50);
  doc.text(`Branch: ${student.branch}`, 20, 60);
  doc.text(`Semester: ${student.examForm.semester}`, 20, 70);

  doc.text(`Exam Type: ${data.examType}`, 20, 90);
  doc.text(`Exam Center: ${data.examCenter}`, 20, 100);
  doc.text(`Subjects: ${data.subjects.join(", ")}`, 20, 110);
  doc.text(`Transaction ID: ${data.txnId}`, 20, 120);
  doc.text("Payment Status: Paid", 20, 140);

  doc.save(`ExamForm_${student.prn}.pdf`);
}
