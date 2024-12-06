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
   <label for="name">Name</label>
   <input type="text" name="name" class="form-control" id="accountName" required>
</div>
<div class="form-group">
   <label for="institution">Institution</label>
   <input type="text" name="institution" class="form-control" id="institution" required>
</div>
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <label for="interestRate">Interest Rate</label>
   <input type="number" name="interestRate" class="form-control" id="interestRate" required>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
</div>
`;

export const chequingAccountHtml = `
<div class="form-group">
   <label for="name">Name</label>
   <input type="text" name="name" class="form-control" id="accountName" required>
</div>
<div class="form-group">
   <label for="institution">Institution</label>
   <input type="text" name="institution" class="form-control" id="institution" required>
</div>
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
</div>
`;

export const creditAccountHtml = `
<div class="form-group">
   <label for="name">Name</label>
   <input type="text" name="name" class="form-control" id="accountName" required>
</div>
<div class="form-group">
   <label for="institution">Institution</label>
   <input type="text" name="institution" class="form-control" id="institution" required>
</div>
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <label for="limit">Limit</label>
   <input type="number" name="limit" class="form-control" id="limit" required>
</div>
<div class="form-group">
   <label for="apr">APR</label>
   <input type="number" name="apr" class="form-control" id="apr" required>
   <small id="aprHelp" class="form-text text-muted">Annual Percentage Rate</small>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
</div>
`;

export const investmentAccountHtml = `
<div class="form-group">
   <label for="name">Name</label>
   <input type="text" name="name" class="form-control" id="accountName" required>
</div>
<div class="form-group">
   <label for="institution">Institution</label>
   <input type="text" name="institution" class="form-control" id="institution" required>
</div>
<div class="form-group">
   <label for="balance">Balance</label>
   <input type="number" name="balance" class="form-control" id="balance" required>
</div>
<div class="form-group">
   <label for="interestRate">Interest Rate</label>
   <input type="number" name="interestRate" class="form-control" id="interestRate" required>
</div>
<div class="form-group">
   <label for="risk">Risk</label>
   <select name="risk" class="form-control" id="risk" required>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
   </select>
</div>
<div class="form-group">
   <button type="submit" class="btn btn-primary">Submit</button>
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