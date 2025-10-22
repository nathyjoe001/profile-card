document.addEventListener('DOMContentLoaded', () => {
  // 1️⃣ Current time in milliseconds
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  function updateTime() {
    if(timeElement){
      timeElement.textContent = Date.now();
    }
  }
  updateTime();
  setInterval(updateTime, 1000);

  // 2️⃣ Avatar upload
  const avatarInput = document.getElementById('avatar-upload');
  const avatarImg = document.getElementById('avatar-img');

  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        avatarImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // 3️⃣ Dark mode toggle
  const toggleButton = document.getElementById("toggleMode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
});
