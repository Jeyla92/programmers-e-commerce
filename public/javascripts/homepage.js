const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnails img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

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
