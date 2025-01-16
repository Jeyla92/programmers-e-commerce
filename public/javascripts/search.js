document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebar = document.querySelector(".sidebar");

  // Hantera klick på hamburgermenyn
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen); // Uppdatera aria-expanded
  });

  // Stäng sidomenyn när användaren klickar utanför
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      sidebar.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false"); // Uppdatera aria-expanded
    }
  });
});
