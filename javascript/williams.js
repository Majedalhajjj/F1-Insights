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

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = document.querySelectorAll(".gallery-image");
  const totalImages = images.length;
  
  function changeImage() {
      // Hide current image
      images[currentIndex].style.opacity = 0;

      // Move to the next image
      currentIndex = (currentIndex + 1) % totalImages;

      // Show next image
      images[currentIndex].style.opacity = 1;
  }

  // Change image every 3 seconds
  setInterval(changeImage, 3000);
});
