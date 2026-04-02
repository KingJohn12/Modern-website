let slideIndex = 0;

function automaticSlide() {
  const slides = document.querySelectorAll('.slideshow img');

  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  slideIndex++;

  // Reset index if past last slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Repeat every 2 seconds
  setTimeout(automaticSlide, 2000);
}

automaticSlide();
