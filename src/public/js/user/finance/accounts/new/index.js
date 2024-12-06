import { 
   cashAccountHtml,
   savingsAccountHtml,
   chequingAccountHtml,
   creditAccountHtml,
   investmentAccountHtml,
   loanAccountHtml,
} from './templates.js';

const user = JSON.parse(localStorage.getItem('user'));

const form = document.getElementById('newAccountForm');
const type = document.getElementById('type');
const formContent = document.getElementById('formContent');

document.addEventListener('DOMContentLoaded', async () => {
      if (type.value === 'cash') {
         formContent.innerHTML = cashAccountHtml;
      } else if (type.value === 'savings') {
         formContent.innerHTML = savingsAccountHtml;
      } else if (type.value === 'chequing') {
         formContent.innerHTML = chequingAccountHtml;
      } else if (type.value === 'credit') {
         formContent.innerHTML = creditAccountHtml;
      } else if (type.value === 'investment') {
         formContent.innerHTML = investmentAccountHtml;
      } else if (type.value === 'loan') {
         formContent.innerHTML = loanAccountHtml;
      } else {
         formContent.innerHTML = '';
      }

      type.addEventListener('change', (event) => {
         if (event.target.value === 'cash') {
            formContent.innerHTML = cashAccountHtml;
            form.addEventListener('submit', async (event) => {
               event.preventDefault();
               const newAccount = {
                  userId: user._id,
                  institution: "Cash",
                  type: type.value,
                  name: document.getElementById('name').value,
                  balance: document.getElementById('balance').value,
               };
               const response = await fetch('/api/user/finance/accounts/new', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newAccount),
               });
               const data = await response.json();
               if (response.status === 201) {
                  const accountId = data._id;
                  window.location.href = '/user/finance/account/:'+accountId;
               } else {
                  window.alert('Error creating account');
               }
            });
         } else if (event.target.value === 'savings') {
            formContent.innerHTML = savingsAccountHtml;
            form.addEventListener('submit', async (event) => {
               event.preventDefault();
               const newAccount = {
                  userId: user._id,
                  type: form.type.value,
                  name: form.name.value,
                  balance: form.balance.value,
               };
               const response = await fetch('/api/user/finance/accounts/new', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newAccount),
               });
               const data = await response.json();
               if (response.status === 201) {
                  const accountId = data._id;
                  window.location.href = '/user/finance/account/:'+accountId;
               } else {
                  window.alert('Error creating account');
               }
            });
         } else if (event.target.value === 'chequing') {
            formContent.innerHTML = chequingAccountHtml;
            form.addEventListener('submit', async (event) => {
               event.preventDefault();
               const newAccount = {
                  userId: user._id,
                  name: form.name.value,
                  type: form.type.value,
                  balance: form.balance.value,
               };
               const response = await fetch('/api/user/finance/accounts/new', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newAccount),
               });
               const data = await response.json();
               if (response.status === 201) {
                  const accountId = data._id;
                  window.location.href = '/user/finance/account/:'+accountId;
               } else {
                  window.alert('Error creating account');
               }
            });
         } else if (event.target.value === 'credit') {
            formContent.innerHTML = creditAccountHtml;
            document.getElementById('apr').addEventListener('input', (event) => {
               const value = event.target.value;
               if (value < 0) {
                  window.alert('APR cannot be less than 0');
               }
            });
            form.addEventListener('submit', async (event) => {
               event.preventDefault();
               const newAccount = {
                  userId: user._id,
                  name: form.name.value,
                  type: form.type.value,
                  balance: form.balance.value,
                  limit: form.limit.value,
                  apr: form.apr.value,
               };
               const response = await fetch('/api/user/finance/accounts/new', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newAccount),
               });
               const data = await response.json();
               if (response.status === 201) {
                  const accountId = data._id;
                  window.location.href = '/user/finance/account/:'+accountId;
               } else {
                  window.alert('Error creating account');
               }
            });
         } else if (event.target.value === 'investment') {
            formContent.innerHTML = investmentAccountHtml;
            form.addEventListener('submit', async (event) => {
               event.preventDefault();
               const newAccount = {
                  userId: user._id,
                  name: form.name.value,
                  type: form.type.value,
                  balance: form.balance.value,
                  risk: form.risk.value,
               };
               const response = await fetch('/api/user/finance/accounts/new', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newAccount),
               });
               const data = await response.json();
               if (response.status === 201) {
                  const accountId = data._id;
                  window.location.href = '/user/finance/account/:'+accountId;
               } else {
                  window.alert('Error creating account');
               }
            });
         } else if (event.target.value === 'loan') {
            formContent.innerHTML = loanAccountHtml;
            form.addEventListener('submit', async (event) => {
               event.preventDefault();
               const newAccount = {
                  userId: user._id,
                  name: form.name.value,
                  type: form.type.value,
                  balance: form.balance.value,
                  apr: form.apr.value,
               };
               const response = await fetch('/api/user/finance/accounts/new', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newAccount),
               });
               const data = await response.json();
               if (response.status === 201) {
                  const accountId = data._id;
                  window.location.href = '/user/finance/account/:'+accountId;
               } else {
                  window.alert('Error creating account');
               }
            });
         } else {
            formContent.innerHTML = 'Select an account type';
         }
      });
   });
   

   // form.addEventListener('submit', async (event) => {
   //    event.preventDefault();
   //    let newAccount;
   //       if(type.value === 'cash'){
   //          newAccount = {
   //             userId: user._id,
   //             institution: "Cash",
   //             type: type.value,
   //             accountName: document.getElementById('accountName').value,
   //             balance: document.getElementById('balance').value,
   //          };
   //       } else if(type.value === 'savings'){
   //          newAccount = {
   //             userId: user._id,
   //             type: form.type.value,
   //             name: form.name.value,
   //             balance: form.balance.value,
   //          };
   //       } else if(type.value === 'chequing'){
   //          newAccount = {
   //             userId: user._id,
   //             name: form.name.value,
   //             type: form.type.value,
   //             balance: form.balance.value,
   //          };
   //       } else if(type.value === 'credit'){
   //          newAccount = {
   //             userId: user._id,
   //             name: form.name.value,
   //             type: form.type.value,
   //             balance: form.balance.value,
   //             limit: form.limit.value,
   //             apr: form.apr.value,
   //          };
   //       } else if(type.value === 'investment'){
   //          newAccount = {
   //             userId: user._id,
   //             name: form.name.value,
   //             type: form.type.value,
   //             balance: form.balance.value,
   //             risk: form.risk.value,
   //          };
   //       } else if(type.value === 'loan'){
   //          newAccount = {
   //             userId: user._id,
   //             name: form.name.value,
   //             type: form.type.value,
   //             balance: form.balance.value,
   //             apr: form.apr.value,
   //          };
   //       } else {
   //          newAccount = {};
   //    };
   //    // newAccount.userId = id.localStorage.getItem('user');
   //    console.log(newAccount);
   //    const response = await fetch('/api/user/finance/accounts/new', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json',
   //       },
   //    });
   //    const data = await response.json();
   //    if (response.status === 200) {
   //       const accountId = data._id;
   //       window.location.href = '/user/finance/account/:'+accountId;
   //    }
   // });