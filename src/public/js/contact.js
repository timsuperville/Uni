document.addEventListener('DOMContentLoaded', function() {
   const contactForm = document.getElementById('contactForm');

   contactForm.addEventListener('submit_contact', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (validateForm(name, email, message)) {
         const response = fetch('api/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
         });
         
         if (response.status === 200) {
            alert('Your message has been sent.');
            contactForm.reset();
         } else {
            alert('An error occurred. Please try again.');
         }
      }
   });

   function validateForm(name, email, message) {
      if (name === '') {
         alert('Please enter your name.');
         return false;
      }

      if (email === '') {
         alert('Please enter your email.');
         return false;
      }

      if (!validateEmail(email)) {
         alert('Please enter a valid email address.');
         return false;
      }

      if (message === '') {
         alert('Please enter your message.');
         return false;
      }

      return true;
   }

   function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
   }
});