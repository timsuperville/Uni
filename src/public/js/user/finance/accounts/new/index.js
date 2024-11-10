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
const accountType = document.getElementById('accountType');
const formContent = document.getElementById('formContent');

document.addEventListener('DOMContentLoaded', async () => {
      if (accountType.value === 'cash') {
         formContent.innerHTML = cashAccountHtml;
      } else if (accountType.value === 'savings') {
         formContent.innerHTML = savingsAccountHtml;
      } else if (accountType.value === 'chequing') {
         formContent.innerHTML = chequingAccountHtml;
      } else if (accountType.value === 'credit') {
         formContent.innerHTML = creditAccountHtml;
      } else if (accountType.value === 'investment') {
         formContent.innerHTML = investmentAccountHtml;
      } else if (accountType.value === 'loan') {
         formContent.innerHTML = loanAccountHtml;
      } else {
         formContent.innerHTML = '';
      }

      accountType.addEventListener('change', (event) => {
         if (event.target.value === 'cash') {
            formContent.innerHTML = cashAccountHtml;
         } else if (event.target.value === 'savings') {
            formContent.innerHTML = savingsAccountHtml;
         } else if (event.target.value === 'chequing') {
            formContent.innerHTML = chequingAccountHtml;
         } else if (event.target.value === 'credit') {
            formContent.innerHTML = creditAccountHtml;
         } else if (event.target.value === 'investment') {
            formContent.innerHTML = investmentAccountHtml;
         } else if (event.target.value === 'loan') {
            formContent.innerHTML = loanAccountHtml;
         } else {
            formContent.innerHTML = '';
         }
      });
   });
   

   form.addEventListener('submit', async (event) => {
      event.preventDefault();
      let newAccount;
         if(accountType.value === 'cash'){
            newAccount = {
               userId: user._id,
               institution: "Cash",
               accountType: accountType.value,
               accountName: document.getElementById('accountName').value,
               balance: document.getElementById('balance').value,
            };
         } else if(accountType.value === 'savings'){
            newAccount = {
               userId: user._id,
               type: form.type.value,
               name: form.name.value,
               balance: form.balance.value,
            };
         } else if(accountType.value === 'chequing'){
            newAccount = {
               userId: user._id,
               name: form.name.value,
               type: form.type.value,
               balance: form.balance.value,
            };
         } else if(accountType.value === 'credit'){
            newAccount = {
               userId: user._id,
               name: form.name.value,
               type: form.type.value,
               balance: form.balance.value,
               limit: form.limit.value,
               apr: form.apr.value,
            };
         } else if(accountType.value === 'investment'){
            newAccount = {
               userId: user._id,
               name: form.name.value,
               type: form.type.value,
               balance: form.balance.value,
               risk: form.risk.value,
            };
         } else if(accountType.value === 'loan'){
            newAccount = {
               userId: user._id,
               name: form.name.value,
               type: form.type.value,
               balance: form.balance.value,
               apr: form.apr.value,
            };
         } else {
            newAccount = {};
      };
      // newAccount.userId = id.localStorage.getItem('user');
      console.log(newAccount);
      const response = await fetch('/api/user/finance/accounts/new', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const data = await response.json();
      if (response.status === 200) {
         const accountId = data._id;
         window.location.href = '/user/finance/account/:'+accountId;
      }
   });