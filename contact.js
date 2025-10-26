// ✅ Mobile Menu
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu && navClose) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("open");
  });
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
}

// ✅ Form Validation
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Clear old errors
  document.querySelectorAll(".error-msg").forEach(el => (el.textContent = ""));

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    document.getElementById("error-name").textContent = "Name is required.";
    isValid = false;
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("error-email").textContent = "Valid email required.";
    isValid = false;
  }

  if (!subject) {
    document.getElementById("error-subject").textContent = "Subject required.";
    isValid = false;
  }

  if (!message) {
    document.getElementById("error-message").textContent = "Message required.";
    isValid = false;
  }

  if (isValid) {
    form.reset();
    successMessage.hidden = false;
    setTimeout(() => (successMessage.hidden = true), 3000);
  }
});
