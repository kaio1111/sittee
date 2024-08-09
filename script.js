const menuToggle = document.getElementById('mobile-menu');
const menuNav = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});