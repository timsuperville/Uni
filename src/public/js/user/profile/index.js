import { user, updateAvatar } from '/js/user/index.js';
const Profile = {};

const getProfile = async () => {
   const response = await fetch(`/api/user/profile`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'userid': user._id,
      },
   });
   const data = await response.json();
   Object.assign(Profile, data);
};

const editProfile = async (data) => {
   const response = await fetch('/api/user/profile', {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         'userid': user.id,
      },
      body: JSON.stringify({ ...data
      }),
   });
   Object.assign(Profile, await response.json());
}

const deleteProfile = async () => {
   const response = await fetch('/api/user/profile', {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
         'userid': user.id,
      },
   });
   if (response.status === 204) {
      window.location.replace('/login');
   }
}

await getProfile();

const avatar = document.getElementById('avatar');
const username = document.getElementById('username');
const id = document.getElementById('id');
const userbio = document.getElementById('userbio');
const changeAvatarBtn = document.getElementById('change-avatar-btn');
const form = document.getElementById('profile-info-form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const middleName = document.getElementById('middleName');
const email = document.getElementById('email');
const address = document.getElementById('address');
const street = document.getElementById('street');
const city = document.getElementById('city');
// const region = document.getElementById('region');
const country = document.getElementById('country');
const postcode = document.getElementById('postcode');
const bio = document.getElementById('bio');

avatar.src = user.avatar ? user.avatar : '/img/avatar.png';
username.textContent = user.username ? user.username : '';
id.textContent = user.id ? user.id : '';
userbio.textContent = Profile.bio ? Profile.bio : '';
firstName.value = Profile.firstname ? Profile.firstname : '';
lastName.value = Profile.lastname ? Profile.lastname : '';
middleName.value = Profile.middlename ? Profile.middlename : '';
email.value = Profile.email ? Profile.email : '';
address.value = Profile.address ? Profile.address : '';
street.value = Profile.street ? Profile.street : '';
city.value = Profile.city ? Profile.city : '';
// region.value = Profile.region ? Profile.region : '';
country.value = Profile.country ? Profile.country : '';
postcode.value = Profile.postcode ? Profile.postcode : '';
bio.value = Profile.bio ? Profile.bio : '';

changeAvatarBtn.addEventListener('click', async () => {
   const fileInput = document.createElement('input');
   fileInput.type = 'file';
   fileInput.accept = 'image/*';
   fileInput.click();
   fileInput.addEventListener('change', async () => {
      const file = fileInput.files[0];
      await updateAvatar(file);
      window.location.reload();
   });
});

form.addEventListener('submit', async (event) => {
   event.preventDefault();
   const data = {
      firstname: firstName.value,
      lastname: lastName.value,
      middlename: middleName.value,
      email: email.value,
      address: address.value,
      street: street.value,
      city: city.value,
      // region: region.value,
      country: country.value,
      postcode: postcode.value,
      bio: bio.value,
   };
   await editProfile(data);
   window.location.reload();
});

export default {
   Profile,
   editProfile,
   deleteProfile,
};