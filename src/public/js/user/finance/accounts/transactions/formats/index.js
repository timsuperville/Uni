const getFormats = async () => {
   const response = await fetch('/api/user/finance/accounts/transactions/formats', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};

const createFormat = async (format) => {
   const response = await fetch('/api/user/finance/accounts/transactions/formats', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(format),
   });
   const data = await response.json();
   return data;
};

const deleteFormat = async (id) => {
   const response = await fetch(`/api/user/finance/accounts/transactions/formats/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   const data = await response.json();
   return data;
};

export {
   getFormats,
   createFormat,
   deleteFormat,
};