// DARK MODE TOGGLE
// === DARK MODE TOGGLE with Persistence ===
const themeToggle = document.getElementById("themeToggle");

// On page load: Apply theme from localStorage
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// On toggle click: switch theme + save preference
themeToggle?.addEventListener("click", () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
});

// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// Auto-update footer year
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}



// Fullscreen viewer
function openFullscreen(src) {
  const modal = document.getElementById('fullscreenModal');
  const img = document.getElementById('fullscreenImage');
  img.src = src;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeFullscreen() {
  const modal = document.getElementById('fullscreenModal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

document.getElementById('fullscreenModal').addEventListener('click', (e) => {
  if (e.target.id === 'fullscreenModal') closeFullscreen();
});

// Gallery left/right scroll for desktop
function scrollGallery(direction) {
  const slider = document.getElementById('gallerySlider');
  const scrollAmount = slider.offsetWidth * 0.6; // 60% of visible width
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Optional: smooth drag-to-scroll (desktop too)
const slider = document.getElementById("gallerySlider");
let isDown = false, startX, scrollLeft;
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("cursor-grabbing");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("cursor-grabbing");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("cursor-grabbing");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

