document.addEventListener('DOMContentLoaded', async function() {
   const user = JSON.parse(localStorage.getItem('user'));
   const response = await fetch('/api/user/finance/accounts/all', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   console.log(data);
   const myAccounts = data.myAccounts;
   const sharedWithMe = data.sharedWithMe;
   const accountsList = document.getElementById('my-accounts');

      if (myAccounts.length < 1) {
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
         myAccounts.forEach(account => {
            const accountElement = document.createElement('div');
            accountElement.classList.add('col-md-4');
            const card = document.createElement('div');
            card.classList.add('card');
            accountElement.appendChild(card);
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            card.appendChild(cardBody);
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = account.accountName;
            cardBody.appendChild(cardTitle);
            const accountLink = document.createElement('a');
            accountLink.href = `/user/finance/account/:${account._id}`;
            cardBody.appendChild(accountLink);
            const accountBalance = document.createElement('p');
            accountBalance.textContent = `Balance: ${account.balance}`;
            cardBody.appendChild(accountBalance);
            accountsList.appendChild(accountElement);
            // const accountElement = document.createElement('li');
            // accountElement.innerHTML = `
            //    <h3>${account.accountName}</h3>
            //    <p>${account.accountType}</p>
            //    <p>${account.balance}</p>
            // `;
         });
      }

});