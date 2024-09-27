import { getUser, getProfile } from './modules';
const user = (async () => {
   const user = await getUser();
   return user;
})();
const profile = (async () => {
   const profile = await getProfile();
   return profile;
})();

function loadUserDashboard() {
   const userDashboard = document.getElementById('user-dashboard');
   userDashboard.innerHTML = `
      <h1>Welcome ${user.name}</h1>
      <h2>Your Profile</h2>
      <p>${profile.bio}</p>
   `;
}