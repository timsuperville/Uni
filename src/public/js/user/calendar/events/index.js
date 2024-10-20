const getEvents = async () => {
   const response = await fetch('/api/user/calendar/events', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
}

export {
   getEvents,
};