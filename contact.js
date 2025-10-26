document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success-message");

  let isValid = true;

  // Reset previous errors
  document.querySelectorAll("[id^='error-']").forEach(div => div.textContent = "");
  success.textContent = "";

  // Validation Rules
  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Full name is required.";
    isValid = false;
  }

  if (!email.value.trim()) {
    document.getElementById("error-email").textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById("error-email").textContent = "Enter a valid email (e.g. name@example.com).";
    isValid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }

  if (!message.value.trim()) {
    document.getElementById("error-message").textContent = "Message is required.";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters long.";
    isValid = false;
  }

  // Success
  if (isValid) {
    success.textContent = "✅ Thank you! Your message has been successfully submitted.";
    document.getElementById("contact-form").reset();
  }
});
