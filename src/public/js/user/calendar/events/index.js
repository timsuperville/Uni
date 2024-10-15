const Events = async () => {
   const response = await fetch('/api/user/calendar', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   console.log(data);
   return data;
}

export {
   Events,
};