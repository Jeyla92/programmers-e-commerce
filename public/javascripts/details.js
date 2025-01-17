document.addEventListener("DOMContentLoaded", () => {
    let currentSlideIndex = 1;
  
    // Visa den första sliden när sidan laddas
    showSlide(currentSlideIndex);
  
    // Funktion för att ändra sliden med "prev" och "next"-knappar
    function changeSlide(n) {
      showSlide((currentSlideIndex += n));
    }
  
    // Funktion för att visa en specifik slide
    function showSlide(n) {
      const slides = document.querySelectorAll(".slide");
  
      // Gå tillbaka till första sliden om indexet överstiger längden
      if (n > slides.length) {
        currentSlideIndex = 1;
      }
  
      // Gå till sista sliden om indexet är mindre än 1
      if (n < 1) {
        currentSlideIndex = slides.length;
      }
  
      // Dölj alla slides
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
  
      // Visa den aktuella sliden
      slides[currentSlideIndex - 1].style.display = "block";
    }
  
    // Lägg till eventlyssnare för knapparna "prev" och "next"
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
  });
  