const getEvents = require("./events");

document.addEventListener("DOMContentLoaded", async () => {
  const cal = document.getElementById("calendar");

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  function createCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendarHTML = "<table><tr>";

    // Add day headers
    for (let day of daysOfWeek) {
      calendarHTML += `<th>${day}</th>`;
    }
    calendarHTML += "</tr><tr>";

    // Add empty cells for days of the week before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarHTML += "<td></td>";
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
        calendarHTML += "</tr><tr>";
      }
      calendarHTML += `<td>${day}</td>`;
    }

    calendarHTML += "</tr></table>";
    return calendarHTML;
  }

  cal.innerHTML = createCalendar(month, year);

  const events = await getEvents();

  events.forEach((event) => {
    const eventDate = new Date(event.date);
    const day = eventDate.getDate();
    const eventDescription = event.description;
    const eventCell = cal.querySelector(`td:nth-child(${day + 1})`);
    eventCell.innerHTML += `<div class="event">${eventDescription}</div>`;
  });
  
  // Add event listener to calendar cells
  cal.addEventListener("click", (e) => {
    if (e.target.classList.contains("event")) {
      alert(e.target.textContent);
    }
  });

  // Add event listener to calendar navigation buttons
  document.getElementById("prev").addEventListener("click", () => {
    cal.innerHTML = createCalendar(month - 1, year);
  });

  document.getElementById("next").addEventListener("click", () => {
    cal.innerHTML = createCalendar(month + 1, year);
  });

  document.getElementById("today").addEventListener("click", () => {
    cal.innerHTML = createCalendar(currentDate.getMonth(), currentDate.getFullYear());
  });

  document.getElementById("add-event").addEventListener("click", () => {
    const day = prompt("Enter the day of the month:");
    const description = prompt("Enter the event description:");
    if (day && description) {
      const eventCell = cal.querySelector(`td:nth-child(${parseInt(day) + 1})`);
      eventCell.innerHTML += `<div class="event">${description}</div>`;
    }
  });

  document.getElementById("delete-events").addEventListener("click", () => {
    const events = cal.querySelectorAll(".event");
    events.forEach((event) => {
      event.remove();
    });
  });

  document.getElementById("delete-event").addEventListener("click", () => {
    const day = prompt("Enter the day of the month:");
    const eventCell = cal.querySelector(`td:nth-child(${parseInt(day) + 1})`);
    const event = eventCell.querySelector(".event");
    if (event) {
      event.remove();
    }
  });
});
