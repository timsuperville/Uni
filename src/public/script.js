document.getElementById("subscribeForm").addEventListener("submit", async function (event) {
   event.preventDefault();
   
   const email = document.getElementById("email").value;
   const message = document.getElementById("message");

   try {
       const response = await fetch("/subscribe", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ email }),
       });

       const data = await response.json();
       if (response.ok) {
           message.style.color = "green";
           message.textContent = "Subscription successful!";
           document.getElementById("email").value = "";
       } else {
           message.style.color = "red";
           message.textContent = data.message || "Subscription failed.";
       }
   } catch (error) {
       message.style.color = "red";
       message.textContent = "Error submitting. Please try again.";
   }
});
