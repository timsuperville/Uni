const resetPasswordForm = document.getElementById("reset-password-form");

resetPasswordForm.addEventListener("submit", async (e) => {
  e.preventDefault();
//   get the email and token from the url
   const email = window.location.pathname.split("/")[2];
   const token = window.location.pathname.split("/")[3];
   const password = document.getElementById("password").value;
   const confirmPassword = document.getElementById("confirm-password").value;
   if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').innerText = "Passwords do not match";
      document.getElementById("confirm-password").value = "";
   }
   const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, token, password }),
   });
   const data = await response.json();
   if (data.error) {
      resetPasswordForm.innerHTML = `<h1>${data.error}</h1>`;
   }
   window.location.href = "/password-reset-success";
   });