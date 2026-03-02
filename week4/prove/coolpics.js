const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');


btn.addEventListener('click', function() {
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

const gallery = document.querySelector('#gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    const smallSrc = e.target.src;
    const largeSrc = smallSrc.replace('.jpg', '-full.jpg');

    modal.classList.remove('show');

    modalImage.src = largeSrc;
    modalImage.alt = e.target.alt;

    modalImage.offsetHeight;

    modal.showModal();

    modal.classList.add('show');
}


closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});