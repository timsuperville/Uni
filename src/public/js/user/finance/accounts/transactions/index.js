import { Formats } from './formats/index.js';

const Transactions = async () => {
   const response = await fetch('/api/user/finance/accounts/transactions', {
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
   Transactions,
   Formats,
}