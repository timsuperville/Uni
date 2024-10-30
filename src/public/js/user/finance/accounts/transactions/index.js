import { getFormats } from './formats/index.js';

const getTransactions = async (id, startDate, endDate) => {
   const response = await fetch(`/api/user/finance/accounts/transactions/${id}`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ startDate, endDate }),
   });
   const data = await response.json();
   return data;
};

const uploadTransactions = async (id, transactions) => {
   const response = await fetch(`/api/user/finance/accounts/transactions/${id}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactions),
   });
   const data = await response.json();
   return data;
};

const createTransaction = async (id, transaction) => {
   const response = await fetch(`/api/user/finance/accounts/transactions/${id}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
   });
   const data = await response.json();
   return data;
};

const deleteTransaction = async (id) => {
   const response = await fetch(`/api/user/finance/accounts/transactions/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};

const csvFormats = async () => {
   const response = await fetch('/api/user/finance/accounts/transactions/formats', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};

export {
   getTransactions,
   uploadTransactions,
   createTransaction,
   csvFormats,
}