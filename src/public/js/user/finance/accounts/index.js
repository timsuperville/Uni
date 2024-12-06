document.addEventListener('DOMContentLoaded', async function() {
   const accountsList = document.getElementById('myAccounts');
   const user = JSON.parse(localStorage.getItem('user'));

   const listAccounts = async () => {
      const data = await fetch('/api/user/finance/accounts/all', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const accounts = await data.json();
      console.log(accounts);
      const myAccounts = accounts.myAccounts;
      const sharedWithMe = accounts.sharedWithMe;
      
      myAccounts.forEach(account => {
         const accountItem = document.createElement('li');
         accountItem.innerHTML = `
            <div class="card">
               <div class="card-body">
                  <h5 class="card-title">${account.name}</h5>
                  <p class="card-text">${account.description}</p>
                  <p class="card-text">Balance: $${account.balance}</p>
                  <a href="/user/finance/accounts/account/${account._id}" class="btn btn-primary">View</a>
               </div>
            </div>
         `;
         accountsList.appendChild(accountItem);
      }
      );
   };

   await listAccounts();
});

const createAccount = async (account) => {
   const response = await fetch('/api/user/finance/accounts/new', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(account),
   });
   const data = await response.json();
   return data;
};

const updateAccount = async (id, account) => {
   const response = await fetch(`/api/user/finance/accounts/1/:${id}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(account),
   });
   const data = await response.json();
   return data;
};

const deleteAccount = async (id) => {
   const response = await fetch(`/api/user/finance/accounts/1/:${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};