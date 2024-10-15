import { Formats, Transactions } from './transactions/index.js';

const Accounts = async () => {
   const response = await fetch('/api/user/finance/accounts', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   console.log(data);
   return data;
};

export {
   Accounts,
   Transactions,
   Formats,
};