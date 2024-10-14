const isValidEmail = (email) => {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
 };
 
 const isEmpty = (str) => !str || str.trim() === '';
 
 module.exports = { isValidEmail, isEmpty };
 