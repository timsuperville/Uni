import { userSettings } from "../userSettings.js";

const UserNavbar = () => {
  return `
    <nav className="user-navbar">
    <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/profile">Profile</Link></li> 
    <li><Link to="/settings">Settings</Link></li>
    <li><Link to="/logout">Logout</Link></li>
    </ul>
    </nav>
   `;
};

export default UserNavbar;
