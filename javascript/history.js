const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    header.style.transform = "translateY(-100%)"; // Hide the header
  } else {
    header.style.transform = "translateY(0)"; // Show the header
  }

  lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
  // Example of activating the effect when the page is loaded
});