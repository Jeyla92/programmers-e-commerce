const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnails img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const searchInput = document.getElementById("search-bar"); /* implementera logik för att hantera användarens inmatning och visa relevanta förslag. */
const suggestionsList = document.getElementById("suggestions-list"); /* implementera logik för att hantera användarens inmatning och visa relevanta förslag. */

let currentIndex = 0;
 
/* Jeyla (sökrutan) */
const suggestions = [
  "MacBook Pro M2",
  "Dell XPS 17",
  "Lenovo ThinkPad X1",
  "HP Spectre x360",
  "Asus ROG Zephyrus G14",
  "Apple iPhone 15",
  "Samsung Galaxy S23",
  "Sony WH-1000XM5",
  "Bose QuietComfort Earbuds",
  "Google Pixel 8"
];     /*exempel på data att söka i */

searchInput.addEventListener("input", function () {
  const inputValue = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = ""; // Rensa tidigare förslag

  if (inputValue) {
      const filteredSuggestions = suggestions.filter(item =>
          item.toLowerCase().includes(inputValue)
      );

      filteredSuggestions.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = item;
          listItem.addEventListener("click", () => {
              searchInput.value = item; // Fyll i sökrutan
              suggestionsList.innerHTML = ""; // Stäng förslagslistan
          });
          suggestionsList.appendChild(listItem);
      });
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-container")) {
      suggestionsList.innerHTML = "";
  }
});

function resetAnimations(slide) {
  const elements = slide.querySelectorAll(".content > *");
  elements.forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "";
  });
}

function updateCarousel(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;

  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  resetAnimations(slides[index]);
}

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

nextButton.addEventListener("click", showNext);
prevButton.addEventListener("click", showPrev);

// Auto-slide every 5 seconds
setInterval(showNext, 5000);


//*****************************************************************************MORGAN

document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.add-to-cart');

  cartButtons.forEach((button) => {
      button.addEventListener('click', () => {
          if (button.classList.contains('added')) {
              // Om produkten redan är i varukorgen, ta bort den
              button.textContent = 'Lägg i varukorg';
              button.classList.remove('added');
          } else {
              // Lägg till produkten i varukorgen
              button.textContent = 'Tillagd i varukorg';
              button.classList.add('added');
          }
      });
  });
});



//*****************************************************************************MORGAN