document.getElementById('login-form').addEventListener('submit', async function(event) {
   event.preventDefault();

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   try {
      const response = await fetch('/api/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ email, password })
      });

      if (response.status === 200) {
         window.location.href = '/';
      } else {
         const data = await response.json();
         document.getElementById('main').innerText = data.message;
      }
   } catch (error) {
      console.error('Error:', error);
      document.getElementById('main').innerText = 'An unexpected error occurred.';
   }
});