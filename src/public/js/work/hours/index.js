export function addWorkHour() {
   const table = document.getElementById('work-hours-table');
   const row = table.insertRow();
   row.innerHTML = `
      <td><input type="date" class="form-control"></td>
      <td><input type="time" class="form-control"></td>
      <td><input type="time" class="form-control"></td>
      <td><input type="text" class="form-control" readonly></td>
      <td><button id="delete-row" class="btn btn-danger" onclick="deleteRow(this)"><i class="fas fa-trash"></i></button></td>
   `;
}

export function deleteRow(button) {
   const row = button.parentElement.parentElement;
   row.remove();
}