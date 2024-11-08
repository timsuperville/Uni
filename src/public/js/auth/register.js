document.addEventListener('DOMContentLoaded', () => {
   const registerForm = document.getElementById('register-form');

   registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(registerForm);
      const data = Object.fromEntries(formData.entries());
      const emailError = document.getElementById('email-error');

      try {
         const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         });

         const result = await response.json();
         if (response.status === 409) {
            emailError.textContent = result.error;
         } else {
            window.location.href = '/';
         }
      } catch (error) {
         console.error('Error:', error);
         // Handle error (e.g., show error message)
      }
   });
});