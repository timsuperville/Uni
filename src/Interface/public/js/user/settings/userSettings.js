const subscriptions = {};
const userSettings = {
   subscribe: (key, callback) => {
      if (!subscriptions[key]) {
         subscriptions[key] = [];
      }
      subscriptions[key].push(callback);
   },
   set: (key, value) => {
      if (subscriptions[key]) {
         subscriptions[key].forEach(callback => {
         callback(value);
         });
      }
   },
   get: (key) => {
      return subscriptions[key];
   }
   };

export default userSettings;