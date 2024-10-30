document.addEventListener('DOMContentLoaded', async function() {

   const loadAccounts = async () => {
   const accountsList = document.getElementById('myAccounts');
      const response = await fetch('/api/user/finance/accounts/all', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const accounts = await response.json();
      if (accounts.length === 0) {
         accountsList.innerHTML = `
            <div class="col-md-4">
               <div class="card">
                  <div class="card-body">
                     <h5 class="card-title">No accounts found</h5>
                     <a href="/user/finance/accounts/new">Create an account</a>
                  </div>
               </div>
            </div>
         `;
      }
      else {
         accountsList.innerHTML = '';
         accounts.forEach(account => {
            const accountElement = document.createElement('div');
            accountElement.classList.add('account');
            accountElement.classList.add('col-md-4');
            const accountLink = document.createElement('a');
            accountLink.href = `/user/finance/accounts/${account._id}`;
            accountElement.appendChild(accountLink);
            const accountTitle = document.createElement('h5');
            accountTitle.classList.add('card-title');
            accountTitle.textContent = account.name;
            accountLink.appendChild(accountTitle);
            const accountBalance = document.createElement('p');
            accountBalance.textContent = `Balance: ${account.balance}`;
            accountLink.appendChild(accountBalance);
            accountsList.appendChild(accountElement);
         });
      }
   };
   loadAccounts();

});