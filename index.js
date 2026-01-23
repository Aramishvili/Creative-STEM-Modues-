// Enhanced smooth scrolling with offset
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Adjusted for taller fixed header (approx 80px) + breathing room
        const offsetTop = targetElement.offsetTop - 100;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});

// Parallax/Rotation effect for hero image
window.addEventListener('scroll', () => {
  const img = document.getElementById('arduino');
  if (!img) return; // Guard clause

  const scrollY = window.scrollY;
  // Slower, smoother rotation (divide by 10)
  img.style.transform = `rotate(${scrollY / 6}deg)`;
});
