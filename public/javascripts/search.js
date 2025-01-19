document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebar = document.querySelector(".sidebar");
  const filterForm = document.getElementById("filter-form");

  filterForm.addEventListener("submit", (e) => {
    console.log(e, ' event');
    
    e.preventDefault(); // Förhindra standardomladdning
    const formData = new FormData(filterForm);
    const params = new URLSearchParams(formData).toString();
    window.location.href = `/search?${params}`;
});


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
