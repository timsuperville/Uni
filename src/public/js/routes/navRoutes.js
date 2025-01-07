const routes = async (user) => {
   const Home = () => {
      if (!user.home) {
         return null;
      }
      return '/home';
   }
   const Org = () => {
      if (!user.org) {
         return null;
      }
      return '/org';
   }
   const Profile = () => {
      if (!user.profile) {
         return null;
      }
      return '/profile';
   }
   const Settings = () => {
      if (!user.settings) {
         return null;
      }
      return '/settings';
   }
   
   return [
      {
         name: 'Home',
         path: Home(),
      },
      {
         name: 'Org',
         path: Org(),
      },
      {
         name: 'Profile',
         path: Profile(),
      },
      {
         name: 'Settings',
         path: Settings(),
      },
   ];
}

export { routes };
