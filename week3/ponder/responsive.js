const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-btn');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});