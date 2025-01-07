import { user } from './user/index.js';
import { home } from './home/index.js';
// import { navbar } from './components/index.js';

const mainDOM = document.getElementById('main');
const navDOM = document.getElementById('nav');

mainDOM.innerHTML = `
   <div class="container">
      <h1>Welcome to the main page!</h1>
      <p>This is the main page content.</p>
   </div>
   `;