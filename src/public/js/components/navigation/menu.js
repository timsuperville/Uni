const settings = require('../../user/settings/index.js');
const navHtml = '';

const buildNav = async () => {
   const settingsData = await settings();
   const features = settingsData.features;
   
   function renderMenu() {
    
      // Get DOM references
      const homeLink = document.getElementById("home-link");
      const profileLink = document.getElementById("profile-link");
      const notificationsLink = document.getElementById("notifications-link");
    
      // Conditionally display them
      homeLink.style.display = features.home ? "block" : "none";
      profileLink.style.display = features.profile ? "block" : "none";
      notificationsLink.style.display = features.notifications ? "block" : "none";
    }
    
   };

export default navHtml;