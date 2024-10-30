document.addEventListener('DOMContentLoaded', async () => {
      const householdMembers = await fetch('/api/home/members', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const members = await householdMembers.json();
      if (members.length === 0) {
         document.getElementById('shareWithHome').disabled = true;
      }
   document.getElementById('shareWithHome').addEventListener('change', function() {
      const sharedWithSelect = document.getElementById('sharedWith');
      if (this.checked) {
         sharedWithSelect.style.display = 'block';
         sharedWithSelect.innerHTML = '';
         if (members.length === 0) {
            sharedWithSelect.innerHTML = '<option value="">No members found</option>';
            return;
         }
         members.forEach((user) => {
            const option = document.createElement('option');
            option.value = user.id;
            option.innerHTML = user.name;
            sharedWithSelect.appendChild(option);
         });
      } else {
         sharedWithSelect.style.display = 'none';
      }
   });

   const form = document.getElementById('accountForm');
   form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const newAccount = {
         name: form.name.value,
         type: form.type.value,
         balance: form.balance.value,
      };
      const response = await fetch('/api/user/finance/accounts', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(newAccount),
      });
      const data = await response.json();
      if (response.status === 200) {
         window.location.href = '/user/finance/accounts';
      }
   });
});