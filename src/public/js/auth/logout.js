function logout() {
   const windowMessage = document.getElementById('message');
   const actionLink = document.getElementById('action-link');
   
   windowMessage.innerText = 'Logging out...';
   actionLink.innerText = '';

   localStorage.clear();

   fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      }
   })
   .then(response => {
      if (response.status === 200) {
         response.json().then(data => {
            windowMessage.innerHTML = `<p>${data.message}</p> \n <p>Redirecting to <a href="/login">Login</a> page...</p>`;
            actionLink.innerHTML = `<a href="/login">Login</a>`;
         });
         
         setTimeout(() => {
            window.location.href = '/login';
         }, 4000); // Redirect to login page after 5 seconds
      }
   })
}

logout();