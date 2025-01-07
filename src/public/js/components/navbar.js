const navRoutes = include('../routes/navRoutes');

const Navbar = () => {
   const navItems = navRoutes.map((route, index) => {
      return `<li class="nav-item">
         <a class="nav-link" href="${route.path}">${route.name}</a>
      </li>`;
   });

   return `<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
            ${navItems.join('')}
         </ul>
      </div>
   </nav>`;
}

export default Navbar;