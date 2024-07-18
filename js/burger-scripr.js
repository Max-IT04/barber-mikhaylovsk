
const toggleButton = document.getElementById('toggle-menu');
const burgerMenu = document.querySelector('.header__menu');

toggleButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.header__menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
    });
});