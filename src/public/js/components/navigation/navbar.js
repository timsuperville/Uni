const settings = require('../../user/settings/index.js');
const settingsData = await settings();
const features = settingsData.features;

const Navbar = () => {
   const navbar = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="/">Uni</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a  id="profile-link" class="nav-link" href="/profile">Profile</a>
               </li>
               <li class="nav-item">
                  <a id="home-link" class="nav-link" href="/home">Home</a>
               </li>
               <li class="nav-item">
                  <a id="church-link" class="nav-link" href="/church">Church</a>
               </li>
               <li class="nav-item">
                  <a id="work-link" class="nav-link" href="/work">Work</a>
               </li>
               <li class="nav-item">
                  <a id="org-link" class="nav-link" href="/org">Org</a>
               </li>
               <li class="nav-item">
                  <a id="settings-link" class="nav-link" href="/settings">Settings</a>
               </li>
            </ul>
         </div>
      </nav>`
   ;
   return navbar;
}

export default Navbar;