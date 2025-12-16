// Press Mate Pro - tiny helper JS (no frameworks)
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Change this email address anytime:
  const TO_EMAIL = "info@pressmatepro.co.uk";

  const form = document.getElementById("enquiryForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = (form.elements.namedItem("name").value || "").trim();
    const email = (form.elements.namedItem("email").value || "").trim();
    const message = (form.elements.namedItem("message").value || "").trim();

    if (!name || !email || !message) {
      alert("Please fill in name, email, and message.");
      return;
    }

    const subject = encodeURIComponent("Press Mate Pro enquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
  });
})();