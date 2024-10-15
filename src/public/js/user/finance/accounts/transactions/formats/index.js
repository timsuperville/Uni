const Formats = async () => {
   const response = await fetch('/api/user/finance/accounts/transactions/formats', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   console.log(data);
   return data;
};

export default Formats;