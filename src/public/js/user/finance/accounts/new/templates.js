export const cashAccountHtml = `
<div class="form-group">
   <label for="name">Name</label>
   <input type="text" name="name" class="form-control" id="accountName" required>
</div>
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
   <small id="balanceHelp" class="form-text text-muted" > Balance cannot be less than 0</small>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
</div>
`;

export const savingsAccountHtml = `
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <label for="interestRate">Interest Rate</label>
   <input type="number" name="interestRate" class="form-control" id="interestRate" required>
</div>

<div class="form-group">
   <input type="checkbox" name="joint" id="joint">
   <label for="joint">Joint Account</label>
   <small id="jointHelp" class="form-text text-muted">Share this account with another user</small>
   <select name="jointUser" class="form-control" id="jointUser">
      <option value="">Select a user</option>
   </select>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
</div>
`;

export const chequingAccountHtml = `
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
`;

export const creditAccountHtml = `
<div class="form-group">
   <label for="limit">Limit</label>
   <input type="number" name="limit" class="form-control" id="limit" required>
</div>
<div class="form-group">
   <label for="apr">APR</label>
   <input type="number" name="apr" class="form-control" id="apr" required>
   <small id="aprHelp" class="form-text text-muted">Annual Percentage Rate</small>
   <script>
   // allow percentage input and nothing less than 0
   document.getElementById('apr').addEventListener('input', (event) => {
      const value = event.target.value;
      if (value < 0) {
         window.alert('APR cannot be less than 0');
      }
   });
   </script>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
</div>
`;

export const investmentAccountHtml = `
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <label for="risk">Risk</label>
   <select name="risk" class="form-control" id="risk" required>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
   </select>
</div>
`;

export const loanAccountHtml = `
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <label for="apr">APR</label>
   <input type="number" name="apr" class="form-control" id="apr" required>
</div>
`;