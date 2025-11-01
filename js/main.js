let step = 0;
const steps = document.querySelectorAll(".step");

function showStep() {
  steps.forEach((s, i) => s.classList.toggle("hidden", i !== step));
}
showStep();

document.querySelectorAll(".next").forEach(btn => {
  btn.onclick = () => {
    step++;
    showStep();
  };
});

document.querySelectorAll(".prev").forEach(btn => {
  btn.onclick = () => {
    step--;
    showStep();
  };
});
