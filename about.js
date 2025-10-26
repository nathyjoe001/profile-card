document.addEventListener('DOMContentLoaded', () => {
  // 🌙 Dark mode toggle
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      toggleButton.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
    });
  }

  // 📱 Responsive Navbar Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu && navClose) {
    navToggle.addEventListener('click', () => navMenu.classList.add('show'));
    navClose.addEventListener('click', () => navMenu.classList.remove('show'));
  }
});
