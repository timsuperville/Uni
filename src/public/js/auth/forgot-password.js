const forgotPasswordForm = document.getElementById("forgot-password-form");

forgotPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const response = await fetch("/api/auth/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const results = await response.json();
  if (results.error) {
   forgotPasswordForm.innerHTML += `<p class="error">${results.error}</p>`;
  }
   forgotPasswordForm.innerHTML = `<div class="success">Email sent to ${email}</div>` +
   `<p>Please check your email for the password reset link.</p>` +
   `<p>You may close this tab.</p>`;
});