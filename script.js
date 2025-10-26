document.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Current time in milliseconds
  const timeElement = document.getElementById('current-time');

  function updateTime() {
    if (timeElement) {
      const now = new Date();
      timeElement.textContent = now.toLocaleTimeString(); // prettier format
    }
  }
  updateTime();
  setInterval(updateTime, 1000);

  // 2️⃣ Avatar upload
  const avatarInput = document.getElementById('avatar-upload');
  const avatarImg = document.getElementById('avatar-img');

  if (avatarInput && avatarImg) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          avatarImg.src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // 3️⃣ Dark mode toggle
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Change icon for light/dark mode
      if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞'; // sun in dark mode
      } else {
        toggleButton.textContent = '🌙'; // moon in light mode
      }
    });
  }

  // 4️⃣ Responsive Navbar Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu && navClose) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('active');
    });

    navClose.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  }
});
