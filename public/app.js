const userProfile = document.getElementById('user-profile');
const profileBtn = document.getElementById('profile-btn');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');

profileBtn.addEventListener('click', () => {
  if(userProfile.classList.contains('show')) {
    userProfile.classList.remove('show');
    userProfile.classList.add('hidden');
  } else {
    userProfile.classList.remove('hidden');
    userProfile.classList.add('show');
  }
});

menuIcon.addEventListener('click', () => {
  if(menuIcon.classList.contains('block')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    mobileMenu.classList.remove('hidden');
  }
});

closeIcon.addEventListener('click', () => {
  if(!closeIcon.classList.contains('block')) {
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    mobileMenu.classList.add('hidden');
  }
});