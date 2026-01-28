const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', function() {
    console.log('button clicked');
    btn.classList.toggle('change');
    nav.classList.toggle('show');
});

window.addEventListener('resize', function (){
    const width = window.innerWidth;
    if (width >= 700) {
        btn.classList.remove('change');
        nav.classList.remove('show');
    }
});