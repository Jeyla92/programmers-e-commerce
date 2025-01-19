const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnails img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const searchInput = document.getElementById("search-bar"); /* implementera logik för att hantera användarens inmatning och visa relevanta förslag. */
const suggestionsList = document.getElementById("suggestions-list"); /* implementera logik för att hantera användarens inmatning och visa relevanta förslag. */

let currentIndex = 0;

  // Function to fetch and display search results
  // Function to fetch and display search suggestions
  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }

      const data = await response.json(); // Assuming backend returns JSON with suggestions
      displaySuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Function to render suggestions
  const displaySuggestions = (products) => {
    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (products.length === 0) {
      suggestionsList.innerHTML = `<li>Inga produkter matchade din sökning.</li>`;
      return;
    }

    products.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = product.name;
      listItem.addEventListener("click", () => {
        // Fill input with selected suggestion and navigate
        searchInput.value = product.name;
        window.location.href = `/details/${encodeURIComponent(product.id)}`;
      });
      suggestionsList.appendChild(listItem);
    });
  };

  // Event listener for input field
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchSuggestions(query);
    } else {
      suggestionsList.innerHTML = ""; // Clear suggestions when input is empty
    }
  });

  // Close suggestions list when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-container")) {
      suggestionsList.innerHTML = "";
    }
  });




  // Optional: Trigger search on "Enter" key press
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        fetchSearchResults(query);
      }
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