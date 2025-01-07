document.getElementById('login-form').addEventListener('submit', async function(event) {
   event.preventDefault();

   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   try {
      const response = await fetch('/api/user/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ username, password })
      });

      if (response.status === 200) {
         const data = await response.json();
         localStorage.setItem('user', JSON.stringify(data));
         window.location = '/';
      } else {
         const data = await response.json();
         document.getElementById('username-error').innerText = data.error;
      }
   } catch (error) {
      console.error('Error:', error);
      document.getElementById('username-error').innerText = 'An unexpected error occurred.';
   }
});