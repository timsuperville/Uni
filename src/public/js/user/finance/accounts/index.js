import { getFormats, getTransactions } from './transactions/index.js';

const getAccounts = async () => {
   const response = await fetch('/api/user/finance/accounts/all', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};

const getAccount = async (id) => {
   const response = await fetch(`/api/user/finance/accounts/${id}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};

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

export {
   getAccounts,
   getAccount,
   createAccount,
   updateAccount,
   deleteAccount,
   getTransactions,
   getFormats,
};