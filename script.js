// Redirect splash/intro page to homepage after a delay.
const REDIRECT_TARGET = 'homepage.html'; // path to your homepage
const REDIRECT_DELAY_MS = 5300; // total time before redirect (in ms)
const FADE_DURATION_MS = 1000; // fade-out duration (in ms)

// Function to fade out smoothly
function fadeOutPage() {
  document.body.classList.add('fade-out'); // triggers CSS animation
}

// Redirect after delay
function startRedirect() {
  let remaining = Math.ceil(REDIRECT_DELAY_MS / 1000);
  console.log(`Intro: redirecting to ${REDIRECT_TARGET} in ${remaining}s...`);
  const interval = setInterval(() => {
    remaining -= 1;
    if (remaining > 0) console.log(`${remaining}s...`);
    else clearInterval(interval);
  }, 1000);

  // Start fade-out slightly before redirect
  setTimeout(() => {
    fadeOutPage();
  }, REDIRECT_DELAY_MS - FADE_DURATION_MS);

  // Actual redirect after fade-out
  setTimeout(() => {
    window.location.href = REDIRECT_TARGET;
  }, REDIRECT_DELAY_MS);
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startRedirect);
} else {
  startRedirect();
}

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
  });
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});
