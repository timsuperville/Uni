document.addEventListener('DOMContentLoaded', async function() {
   const accountsList = document.getElementById('myAccounts');

   const listAccounts = async () => {
      const data = await fetch('/api/user/finance/accounts/all', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const accounts = await data.json();
      if (accounts.length === 0) {
         accountsList.innerHTML = '<p>No accounts found</p>';
         return;
      }
      accountsList.innerHTML = '';
      accounts.forEach((account) => {
         const accountItem = document.createElement('li');
         accountItem.innerHTML = `
            <h3>${account.name}</h3>
            <p>${account.type}</p>
            <p>${account.balance}</p>
         `;
         accountsList.appendChild(accountItem);
      });
   };

   listAccounts();
});

const createAccount = async (account) => {
   const response = await fetch('/api/user/finance/accounts', {
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
   const response = await fetch(`/api/user/finance/accounts/${id}`, {
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
   const response = await fetch(`/api/user/finance/accounts/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};