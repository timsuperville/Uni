const cal = document.getElementById('calendar');

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

function createCalendar(month, year) {
   const firstDay = new Date(year, month).getDay();
   const daysInMonth = new Date(year, month + 1, 0).getDate();
   let calendarHTML = '<table><tr>';

   // Add day headers
   for (let day of daysOfWeek) {
      calendarHTML += `<th>${day}</th>`;
   }
   calendarHTML += '</tr><tr>';

   // Add empty cells for days of the week before the first day of the month
   for (let i = 0; i < firstDay; i++) {
      calendarHTML += '<td></td>';
   }

   // Add days of the month
   for (let day = 1; day <= daysInMonth; day++) {
      if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
         calendarHTML += '</tr><tr>';
      }
      calendarHTML += `<td>${day}</td>`;
   }

   calendarHTML += '</tr></table>';
   return calendarHTML;
}

cal.innerHTML = createCalendar(month, year);
cal.addEventListener('click', function(event) {
   if (event.target.tagName === 'TD' && event.target.innerText !== '') {
      const selectedDay = event.target.innerText;
      const eventDescription = prompt(`Enter event for ${selectedDay}/${month + 1}/${year}:`);
      if (eventDescription) {
         event.target.innerHTML += `<div class="event">${eventDescription}</div>`;
      }
   }
});