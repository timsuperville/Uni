const Profile = async () => {
   const response = await fetch('/api/user/profile', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   console.log(data);
   return data;
}

export { Profile };